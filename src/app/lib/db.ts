import type { Product } from "./utils";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db`, {next: {revalidate: (60 * 10)}});
  if(!res.ok) {
    throw new Error('Error getting data');
  }
  return res.json();
}

//DB(db mock) handler
class Db {
  
  private getData: Function;

  constructor(getData: Function) {
    this.getData = getData;
  }

  //Return the best 4 rated products
  async bestSeller() {
    let data = await this.getData();
    const bestRates = data.data.sort((a:Product, b:Product) => b.rate - a.rate);
    bestRates.splice(4);
    return bestRates;
  }

  //Return the number of items in every category
  async categories() {
    const data = await this.getData();
    const dataArry: Product[] = data.data
    const categories = {
      home: 0,
      play: 0,
      boys: 0,
      girls: 0,
      babies: 0,
    };

    for(let i = 0; i < dataArry.length; i++) {
      categories[dataArry[i].category]++;
    }

    return categories;
  }

  //Return nine different random products
  async randomResults() {
    const data = await this.getData();
    const resultArry: Product[] | undefined = [];

    const arr = [];
    while(arr.length < 9) {
      const randomIndex = Math.round(Math.random() * (data.data.length - 1));
      if(arr.indexOf(randomIndex) === -1) {
        arr.push(randomIndex);
        resultArry.push(data.data[randomIndex]);
      }
    }

    return resultArry;
  }

  async category(category: string) {
    const data = await this.getData();
    return data.data.filter((obj: Product) => obj.category === category);
  }
}

export default new Db(getData);
