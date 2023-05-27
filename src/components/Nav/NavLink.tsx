import Link from 'next/link';
import Image from 'next/image';

import Active from '../../../public/main/home-8.png';

export default function NavLink({isActive, linkText, setIsActive}:{isActive: string, linkText: string, setIsActive: Function}) {
  return (
    <Link 
      href={linkText === 'HOME'?'/':linkText.split(' ').join('_').toLowerCase()}
      className={`flex flex-col justify-center items-center ${isActive === linkText && 'text-background'} transition-all`}
      onClick={_ => setIsActive(linkText)}
    >
      <p>{linkText}</p>
      <Image 
        className={`${isActive === linkText?'opacity-100':'opacity-0'} transition-all`} 
        width={30} 
        src={Active} 
        alt='Active Indication'
      />
    </Link>
  );
}
