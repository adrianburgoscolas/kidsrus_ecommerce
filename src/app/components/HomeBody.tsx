'use client'
import Image from 'next/image';

import HomeSearch from '@/app/components/HomeBody/HomeSearch';
import HomeCategories from '@/app/components/HomeBody/HomeCategories';
import HomeNav from '@/app/components/HomeBody/HomeNav';
import HomeNewsletter from './HomeBody/HomeNewsletter';
import HomeSearchResult from '@/app/components/HomeBody/HomeSearchResult';

import useHome from './HomeHooks/useHome';
import type { Product } from '@/app/lib/utils';
import { francois_one } from '@/app/fonts/fonts';
import active from '@/app/images/home-8.png'
import {useEffect} from 'react';

export default function HomeBody({children,category}:{children: React.ReactNode,category:string[]}) {

  const { pages, pageNum, setPageNum, categories, searchResult, handleCategories, handleSearch } = useHome();

  useEffect(() => {
    if(category[0]) {
      handleCategories(category[0]);
    }
  },[]);

  return (
    <div className=''>
      <HomeNav handleCategories={handleCategories} />
      <h2 className='flex flex-col justify-center items-center'>
        <div className={`mb-1 text-center text-primary text-xl tracking-wider ${francois_one.className}`}>NEW ARRIVALS</div>
        <Image width={50} src={active} alt='Avtive Indivation' />
      </h2>
      <nav className={`h-8 text-secdark text-sm ${francois_one.className}`}>
        <ul 
          className='flex justify-end divide-x divide-seclight text-right'
        >
          {pages.length > 1 && 'Pages... '}
          {
            pages.length > 1 &&  
            pages
              .map(
                 (_: any, i: number) => (
                  <li 
                    className={`px-2 cursor-pointer ${pageNum === i && 'text-background'}`} 
                    onClick={_ => setPageNum(i)} 
                    key={i}
                  >
                    {i + 1}
                  </li>
                ))
          }
        </ul>
      </nav>
      <div className='w-full flex gap-10'>
        <aside className='w-60 h-full'>
          <HomeSearch setKeyword={handleSearch} />
          <HomeCategories categories={categories} handleCategories={handleCategories} />
          {children}
          <HomeNewsletter />
        </aside>
        <section className='flex-1 w-2/3'>
          <ul className='grid grid-cols-3 gap-5 w-full'>
            {
              searchResult.map((obj: Product, i: number) =>
                   <li key={obj.sku + i} className='w-fit'>
                     <HomeSearchResult 
                       sku={obj.sku}
                       images={obj.images} 
                       name={obj.name} 
                       category={obj.category} 
                       price={obj.price} 
                       stock={obj.stock} 
                     />
                   </li>
                  )
              .splice(pageNum * 9, 9)
            }
          </ul>
        </section>
      </div>
    </div>
  );
}
