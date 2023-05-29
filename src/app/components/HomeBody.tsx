'use client'
import Image from 'next/image';
import React from 'react';

import { francois_one } from '@/app/fonts/fonts';
import active from '@/app/images/home-8.png'
import HomeSearch from '@/app/components/HomeBody/HomeSearch';
import HomeCategories from '@/app/components/HomeBody/HomeCategories';
import HomeNav from '@/app/components/HomeBody/HomeNav';
import HomeNewsletter from './HomeBody/HomeNewsletter';
import useHome from './HomeHooks/useHome';

export default function HomeBody({children}:{children: React.ReactNode}) {
  const { categories } = useHome();

  return (
    <div className=''>
      <HomeNav handleCategories={console.log} />
      <h2 className='pb-8 flex flex-col justify-center items-center'>
        <div className={`mb-1 text-center text-primary text-xl tracking-wider ${francois_one.className}`}>NEW ARRIVALS</div>
        <Image width={50} src={active} alt='Avtive Indivation' />
      </h2>
      <div className='w-full h-[70rem] flex gap-8'>
        <aside className='w-60 h-full'>
          <HomeSearch />
          <HomeCategories categories={categories} handleCategories={console.log} />
          {children}
          <HomeNewsletter />
        </aside>
        <section className='flex-1 bg-blue-200 w-2/3 h-full'></section>
      </div>
    </div>
  );
}
