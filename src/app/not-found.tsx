import Link from 'next/link';

import { francois_one } from '@/app/fonts/fonts';

export default function NotFound() {
  return (
    <div className={`grow text-primary text-center ${francois_one.className}`}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/"><span className='underline'>Home</span></Link>
      </p>
    </div>
  );
}
