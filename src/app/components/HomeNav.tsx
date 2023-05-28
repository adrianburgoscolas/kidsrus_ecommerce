import Image from 'next/image';

import baby from '@/app/images/baby.png'
import girl from '@/app/images/girl.png'
import boy from '@/app/images/boy.png'
import toys from '@/app/images/toys.png'
import { quicksand } from '@/app/fonts/fonts';

export default function HomeNav() {
  return (
    <nav className={`flex justify-around border-2 border-dotted h-56 w-full my-12 text-[0.6rem] font-bold text-primary ${quicksand.className}`}>
      <div className='cursor-pointer flex flex-col gap-4 justify-center'>
        <Image width={105} src={baby} alt='Baby Category'/>
        <p className='text-center'>Baby & Toddler</p>
      </div>
      <div className='cursor-pointer flex flex-col gap-4 justify-center'>
        <Image width={105} src={girl} alt='Girls Category'/>
        <p className='text-center'>For Girls</p>
      </div>
      <div className='cursor-pointer flex flex-col gap-4 justify-center'>
        <Image width={105} src={boy} alt='Boys Category'/>
        <p className='text-center'>For Boys</p>
      </div>
      <div className='cursor-pointer flex flex-col gap-4 justify-center'>
        <Image width={105} src={toys} alt='Toys Category'/>
        <p className='text-center'>Home & Toys</p>
      </div>
    </nav>
  );
}
