import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import db from "@/app/lib/db";
import { francois_one } from "@/app/fonts/fonts";
import type { Product } from '@/app/lib/utils';

//Revalidate this component every 10min
export const revalidate = 60 * 10;

export default async function HomeBestSellers() {

  const bestSeller = await db.bestSeller();

  const list = bestSeller.map((product:Product) => 
    <li className='p-3 h-full' key={product.sku}>
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
          <div className='flex'>
            <FontAwesomeIcon className={`h-3 w-3 ${product.rate > 0?'text-background':'text-seclight'}`} icon={faStar} />
            <FontAwesomeIcon className={`h-3 w-3 ${product.rate > 1?'text-background':'text-seclight'}`} icon={faStar} />
            <FontAwesomeIcon className={`h-3 w-3 ${product.rate > 2?'text-background':'text-seclight'}`} icon={faStar} />
            <FontAwesomeIcon className={`h-3 w-3 ${product.rate > 3?'text-background':'text-seclight'}`} icon={faStar} />
            <FontAwesomeIcon className={`h-3 w-3 ${product.rate > 4?'text-background':'text-seclight'}`} icon={faStar} />
          </div>
          <p className=''>${product.price}</p>
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

