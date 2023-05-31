import Link from "next/link";
import Image from "next/image";

import db from "@/app/lib/db";
import { francois_one } from "@/app/fonts/fonts";
import type { Product } from '@/app/lib/utils';
import Rate from "../Rate";
import PriceFormat from "../PriceFormat";

//Revalidate this component every 10min
export const revalidate = 60 * 10;

export default async function HomeBestSellers() {

  const bestSellerData = await db.bestSeller();

  const list = bestSellerData.map((product:Product) => 
    <li className='p-2 h-full' key={product.sku}>
      <div className='flex'>
        <div className='rounded-full w-12 h-12 overflow-hidden'>
        <Image 
          className='object-none object-center' 
          width={48} 
          height={60}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.images[1]}`} alt={product.name} 
        />
        </div>
        <div className='flex flex-col gap-1 ml-3 text-[0.7rem] text-primary font-bold'>
          <Link href={`/product/${product.sku}`}>
            <h3>{product.name}</h3>
          </Link>
          <p><PriceFormat price={product.price} /></p>
          <Rate rate={product.rate}/>
        </div>
      </div>
    </li>
  );

  return (
    <section>
      <h2 className={`text-primary text-lg mb-4 mt-9 ${francois_one.className}`}>BEST SELLERS</h2>
      <ul className='flex flex-col border-2 border-dotted min-h-[10rem]'>
        {list}
      </ul>
    </section>
  );
}

