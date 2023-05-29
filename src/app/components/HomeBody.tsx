'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import { francois_one } from '@/app/fonts/fonts';
import active from '@/app/images/home-8.png'
import HomeSearch from '@/app/components/HomeBody/HomeSearch';
import HomeCategories from '@/app/components/HomeBody/HomeCategories';
import HomeNav from '@/app/components/HomeBody/HomeNav';
import HomeNewsletter from './HomeBody/HomeNewsletter';
import useHome from './HomeHooks/useHome';
import type { Product } from '@/app/lib/utils';

export default function HomeBody({children}:{children: React.ReactNode}) {

  const [category, setCategory] = useState('');
  const { categories, randomResult, categoryResult } = useHome(category);


  return (
    <div className=''>
      <HomeNav handleCategories={setCategory} />
      <h2 className='pb-8 flex flex-col justify-center items-center'>
        <div className={`mb-1 text-center text-primary text-xl tracking-wider ${francois_one.className}`}>NEW ARRIVALS</div>
        <Image width={50} src={active} alt='Avtive Indivation' />
      </h2>
      <div className='w-full h-[70rem] flex gap-8'>
        <aside className='w-60 h-full'>
          <HomeSearch />
          <HomeCategories categories={categories} handleCategories={setCategory} />
          {children}
          <HomeNewsletter />
        </aside>
        <section className='flex-1 bg-blue-200 w-2/3 h-full'>
          {category !== ''?
            categoryResult.map((obj: Product) =><li key={obj.sku}>{obj.name}</li>).slice(0, 9):
            randomResult.map((obj: Product) =><li key={obj.sku}>{obj.name}</li>)
          }
        </section>
      </div>
    </div>
  );
}
