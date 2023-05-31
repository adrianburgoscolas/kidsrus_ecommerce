'use client'
import Image from 'next/image';

import { francois_one } from '@/app/fonts/fonts';
import Active from '@/app/images/home-8.png'
import db from '@/app/lib/db';
import { Product } from '@/app/lib/utils';
import HomeSearchResult from '@/app/components/HomeBody/HomeSearchResult';import Rate from '@/app/components/Rate';


export default async function ProductFooter({productId}:{productId:string}) {

  const related: Product[] = await db.related(productId);

  return (
    <footer>
      <header className='flex flex-col justify-center items-center'>
        <h3 className={`text-primary ${francois_one.className}`}>RELATED PRODUCTS</h3>
        <Image width={32} src={Active} alt='Active' />
      </header>
      <nav className='flex justify-center my-5'>
        <ul className='flex gap-8'>
          {related.map((product: Product, i:number) => 
            <li key={i} className='flex flex-col items-center'>
              <HomeSearchResult 
                images={product.images} 
                category={product.category}
                name={product.name}
                price={product.price}
                stock={product.stock}
                sku={product.sku}
              />
              <Rate rate={product.rate} />
            </li>
          )}
        </ul>
      </nav>
    </footer>
  );
}
