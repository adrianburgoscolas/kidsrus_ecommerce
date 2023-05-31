import Image from 'next/image';

import Loader from '@/app/images/loader.gif';

export default function Loading() {

  return (
    <main className='grow'>
      <div className='w-full mx-auto flex justify-center'>
      <Image width={50} height={50} src={Loader} alt='Loader'/>
      </div>
    </main>
  );
}
