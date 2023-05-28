import Image from 'next/image';
import Link from 'next/link';

import { francois_one } from '@/app/fonts/fonts';
import Active from '@/app/images/home-8.png';
import insta1 from '@/app/images/87339849_530805007551424_292323017375800029_nlow.jpg'
import insta2 from '@/app/images/87413583_2660130777540405_5722961474466513534_nlow.jpg'
import insta3 from '@/app/images/85069033_185901059177965_6767010623440980864_nlow.jpg'
import insta4 from '@/app/images/84981049_620107085435507_4260875787090681190_nlow.jpg'
import insta5 from '@/app/images/85051426_2060664737412512_8458893884651247910_nlow.jpg'

export default function HomeFooter() {
  return (
    <footer className='py-20'>
      <header className='pb-8 flex flex-col items-center'>
        <h2 className={`mb-1 text-xl text-primary ${francois_one.className}`}>ISTAGRAM @KIDSRUS</h2>
        <Image src={Active} width={50} alt='Active Indication'/>
      </header>
      <ul className='flex gap-2'>
        <li className='hover:opacity-90 transition-all'>
          <Link href='#notop'>
            <Image src={insta1} width={160} height={160} alt='Istagram Image'/>
          </Link>
        </li>
        <li className='hover:opacity-90 transition-all'>
          <Link href='#notop'>
            <Image src={insta2} width={160} height={160} alt='Istagram Image'/>
          </Link>
        </li>
        <li className='hover:opacity-90 transition-all'>
          <Link href='#notop'>
            <Image src={insta3} width={160} height={160} alt='Istagram Image'/>
          </Link>
        </li>
        <li className='hover:opacity-90 transition-all'>
          <Link href='#notop'>
            <Image src={insta4} width={160} height={160} alt='Istagram Image'/>
          </Link>
        </li>
        <li className='hover:opacity-90 transition-all'>
          <Link href='#notop'>
            <Image src={insta5} width={160} height={160} alt='Istagram Image'/>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
