import type { Product, Categories } from "./utils";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db`, { next: { revalidate: 60 * 5 }});
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
  async bestSeller(): Promise<Product[]> {
    let data = await this.getData();
    const bestRates = data.data.sort((a:Product, b:Product) => b.rate - a.rate);
    bestRates.splice(4);
    return bestRates;
  }

  //Return the number of items in every category
  async categories(): Promise<Categories> {
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
  async randomResults(): Promise<Product[]> {
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

  //Return all items in a category
  async category(category: string): Promise<Product[]> {
    const data = await this.getData();
    return data.data.filter((obj: Product) => obj.category === category);
  }

  //Return all items that match a keyword
  async search(keyword: string): Promise<Product[]> {
    const data = await this.getData();
    const regexp = new RegExp(keyword,'i');
    return data.data.filter((obj: Product) => {
      return regexp.test(`${obj.name} ${obj.category} ${obj.tags.join(' ')} ${Object.values(obj.info).join(' ')}`);
    });
  }

  //Return a single product
  async product(sku: string): Promise<Product> {
    const data = await this.getData();
    return data.data.find((product: Product) => product.sku === sku);
  }

  //Return 4 products related to an id
  async related(sku: string): Promise<Product[]> {
    const data = await this.getData();
    const product = data.data.find((product: Product) => product.sku === sku);
    const categoryList = data.data
      .filter((obj: Product) => obj.category === product.category)
      .sort((a:Product, b:Product) => b.rate - a.rate);
    categoryList.splice(4);
    return categoryList;
  }
}

export default new Db(getData);
