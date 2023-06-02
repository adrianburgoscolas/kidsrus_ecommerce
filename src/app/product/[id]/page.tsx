import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import db from '@/app/lib/db';
import Link from 'next/link';

import ProductImage from './ProductImage';
import { gilda, francois_one } from '@/app/fonts/fonts';
import PriceFormat from '@/app/components/PriceFormat';
import Rate from '@/app/components/Rate';
import ProductAddToCart from './ProductAddToCart';
import ProductInfo from "./ProductInfo";
import ProductFooter from "./ProductFooter";
import type { Product } from '@/app/lib/utils';

export const revalidate = 300; // revalidate this page every 10 seconds

export default async function ProductHome({params}:{params:{id: string}}) {
  const { id } = params;
  const product: Product = await db.product(id);
  if(!product) {
  return (
    <main className='grow'>
      <header className='border-2 border-dotted max-w-[100rem] h-36 mx-auto flex flex-col justify-center items-center'>
        <h2 className={`text-3xl text-primary ${gilda.className}`}>Wrong Product SKU</h2>
        <p className='text-xs text-primary font-bold mt-3'>
          <Link href='/'>
            Home
          </Link> : <Link className="text-background" href={`/search`}>
            Search
          </Link>
        </p>
      </header>
    </main>
  );
  }

  return (
    <main className='grow'>
      <header className='border-2 border-dotted max-w-[100rem] h-36 mx-auto flex flex-col justify-center items-center'>
        <h2 className={`text-3xl text-primary ${gilda.className}`}>{product.name}</h2>
        <p className='text-xs text-primary font-bold mt-3'>
          <Link href='/'>
            Home
          </Link> : <Link href={`/search/${product.category}`}>
            For {product.category.split('')[0].toUpperCase() + product.category.slice(1)}
          </Link> : <span className='text-background'>{product.name}</span>
        </p>
      </header>
      <section className='flex gap-10 w-[50rem] h-[31rem] mx-auto mt-12'>
        <ProductImage stock={product.stock} images={product.images} />
        <div className='items-stretch w-[29rem] text-[0.6rem]'>
          <p className={`text-primary mt-4 mb-2 ${francois_one.className}`}><PriceFormat price={product.price} /></p>
          <Rate rate={product.rate} />
          <p className='mt-5 text-secdark text-[0.7rem] font-bold'>{product.description}</p>
          <div 
            className='py-8'
          >
            {
              (product.stock === 0) ? 
                <button className='text-primary'>
                  <FontAwesomeIcon icon={faHeart} /> 
                  {' '}
                  Add to Wishlist
                </button>:
                <ProductAddToCart />
            }
          </div>
          <div className='border-2 border-dotted px-2 font-bold text-secdark'>
            <table className='table-fixed w-full'>
              <thead>
                <tr>
                  <th className={`w-32 ${francois_one.className}`}></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='divide-y-[1px]'>
                <tr>
                  <td className='text-primary p-2'>SKU</td>
                  <td>{product.sku}</td>
                </tr>
                <tr>
                  <td className='text-primary p-2'>Category</td>
                  <td>For <span className='capitalize'>{product.category}</span></td>
                </tr>
                <tr>
                  <td className='text-primary p-2'>Tags</td>
                  <td>{
                    product.tags
                      .map((tag:string, i:number, arr:string[]) => <span key={i}><span className='capitalize'>{tag}</span>{i !== arr.length -1?', ':''}</span>)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <ProductInfo 
        info={product.info} 
        description={product.description}
        name={product.name}
        rate={product.rate}
        stock={product.stock}
      />
      {/* @ts-expect-error Server Component */}
      <ProductFooter productId={id} />
    </main>
  );
}
