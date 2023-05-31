import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

import { quicksand, gilda, francois_one } from "@/app/fonts/fonts";
import HomeSearchResultAddToWish from '@/app/components/HomeBody/HomeSearchResult/HomeSearchResultAddToWish';
import HomeSearchResultAddToCart from '@/app/components/HomeBody/HomeSearchResult/HomeSearchResultAddToCart';
import PriceFormat from "../PriceFormat";
import {toTitleCase} from "@/app/lib/utils";

type SearchResultProp = {
  images: string[],
  category: string,
  name: string,
  price: string,
  stock: number,
  sku: string,
}

export default function HomeSearchResult({images, category, name, price, stock, sku}:SearchResultProp) {
  const [show, setShow] = useState(false);

  function handleMouseEnter() {
    setShow(true);
  }
  
  function handleMouseLeave() {
    setTimeout(() => setShow(false), 700);
  }
  
  return (
    <article className='relative flex flex-col w-40 h-80'>
      {(stock === 0)  && <p className={`z-30 top-3 right-3 absolute rounded-full bg-white text-primary text-[0.5rem] py-1 px-3 ${francois_one.className}`}
      >
        OUT OF STOCK
      </p>}
      <Link href={`/product/${sku}`}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' overflow-hidden relative h-60 cursor-pointer'>
        <Image 
          className={`absolute`}
          width={380} 
          height={600} 
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${images[0]}`} 
          alt={name}
        />
        <Image 
          className={`${show && 'opacity-100'} absolute opacity-0 duration-700`}
          width={380} 
          height={600} 
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${images[1]}`} 
          alt={name}
        />
        <HomeSearchResultAddToCart show={show} stock={stock} />
        <HomeSearchResultAddToWish show={show} stock={stock} />
        </div>
        </Link>
      <div className='grow flex flex-col items-center justify-center'>
        <p 
          className={`text-[0.6rem] font-bold text-background hover:text-primary transition-all cursor-pointer ${quicksand.className}`}
        >
          For {toTitleCase(category)}
        </p>
        <Link href={`/product/${sku}`}>
          <h3 
          className={`text-primary text-sm text-center m-1 hover:text-background transition-all cursor-pointer ${gilda.className}`}>{name}</h3>
        </Link>
        <footer 
          className={`h-4 text-primary text-[0.6rem] font-bold ${francois_one.className}`}
        >
          {(stock !== 0) && <PriceFormat price={price} />}
        </footer>
      </div>
    </article>
  );
}
