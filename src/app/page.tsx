'use client'
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {francois_one} from './fonts/fonts';
import Image from 'next/image';

import Loader from '@/app/images/loader.gif';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.push('/search'), 3000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="grow">
      <p className={`text-primary text-xl text-center  ${francois_one.className}`}>REDIRECTING TO SEARCH PAGE...</p>
      <div className='w-full my-10 mx-auto flex justify-center'>
      <Image width={50} height={50} src={Loader} alt='Loader'/>
      </div>
    </div>
  );
}
