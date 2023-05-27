import Image from 'next/image';

import Loader from '@/app/images/loader.gif';

export default function Loading() {

  return (
    <main className='grow'>
      <Image className='w-full mx-auto' src={Loader} alt='Loader'/>
    </main>
  );
}
