import type { Product } from "./utils";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db`, {next: {revalidate: (60 * 10)}});
  if(!res.ok) {
    throw new Error('Error getting data');
  }
  return res.json();
}

class Db {
  
  private getData: Function;

  constructor(getData: Function) {
    this.getData = getData;
  }

  async bestSeller() {
    let data = await this.getData();
    const bestRates = data.data.sort((a:Product, b:Product) => b.rate - a.rate);
    bestRates.splice(4);
    return bestRates;
  }

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
}

export default new Db(getData);
