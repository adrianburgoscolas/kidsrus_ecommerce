import Image from 'next/image';

import slider1 from '@/app/images/slider-1.jpg';
import girlsPower from '@/app/images/girls-power.jpg';
import { francois_one, quicksand } from '@/app/fonts/fonts';

export default function HomeHeader() {
  return (
    <header className='flex gap-10 h-[22rem]'>
      <article className='flex flex-col justify-end z-10 relative w-[32.5rem]'>
        <Image className='z-0 absolute top-0' width={520} src={slider1} alt='Discover' priority/>
        <div className={`p-10 z-10 relative text-white ${francois_one.className}`}>
          <h2 className='p-0 -mb-2 text-4xl'>JUMPSUITS</h2>
          <p className={`py-3 text-[0.7rem] ${quicksand.className}`}>Comfortable clothes for your little babies</p>
          {/*change this button for a Link*/}
          <button 
            className='ml-1 mt-1 px-5 py-1 bg-white outline-4 outline outline-white border-[0.13rem] border-primary border-dashed text-[0.65rem] text-primary'
          >
            DISCOVER
          </button>
        </div>
      </article>
      <article className='flex flex-col items-center  h-[22rem]'>
        <div className='grow'>
        <Image src={girlsPower} width={230} alt='Girls Power'/>
        </div>
        <h2 className={`text-primary text-xl tracking-wider ${francois_one.className}`}>GIRL POWER</h2>
        <p className={`-mb-1 text-[0.7rem] text-secdark ${quicksand.className}`}>For a colorful summer</p>
      </article>
    </header>
  );
}
