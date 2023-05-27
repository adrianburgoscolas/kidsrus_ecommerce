'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Active from '@/app/images/home-8.png';

export default function NavLink({linkText}:{linkText:string}) {
  const pathname = usePathname();
  const isActive: boolean = (pathname.slice(1) || 'home').startsWith(linkText.split(' ').join('_').toLowerCase());

  return (
    <Link 
      href={linkText === 'HOME'?'/':`/${linkText.split(' ').join('_').toLowerCase()}`}
      className={`flex flex-col justify-center items-center ${isActive && 'text-background'} transition-all`}
    >
      <p>{linkText}</p>
      <Image 
        className={`${isActive?'opacity-100':'opacity-0'} transition-all`} 
        width={30} 
        src={Active} 
        alt='Active Indication'
      />
    </Link>
  );
}
