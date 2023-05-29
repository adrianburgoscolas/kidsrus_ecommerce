export type Product = {
  name: string,
  price: string,
  stock: boolean,
  category: 'home'|'boy'|'girl'|'play'|'baby',
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
