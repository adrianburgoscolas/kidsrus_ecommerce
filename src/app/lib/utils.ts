export type Product = {
  name: string,
  price: string,
  stock: boolean,
  category: 'home'|'boys'|'girls'|'play'|'babies',
  tags: string[],
  description: string,
  info: {
    color:string,
    material:string,
    age:string,
  },
  rate:number,
  sku:string,
  images:string[],
}

export type Categories = {
  [index:string]:number,
}

