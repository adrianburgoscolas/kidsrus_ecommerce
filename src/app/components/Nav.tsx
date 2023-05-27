import Link from 'next/link';
import { francois_one } from '@/app/fonts/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import NavLink from '@/app/components/Nav/NavLink';
import ButtonBadge from '@/app/components/Nav/ButtonBadge';

export default function Nav() {

  return (
    <nav 
      className={`bg-white sticky top-0 p-4 text-primary flex justify-center items-center gap-6 text-[0.75rem] ${francois_one.className}`}
    >
      <NavLink linkText={'HOME'} />
      <NavLink linkText={'SHOP FEATURES'} />
      <NavLink linkText={'CLOTHES'} />
      <NavLink linkText={'PAGES'} />
      <NavLink linkText={'SHORT CODES'} />
      <NavLink linkText={'POST TYPES'} />
      <div className='flex gap-4'>
        <ButtonBadge value={0}>
          <FontAwesomeIcon className='h-4 text-secdark mb-1.5' icon={faHeart} />
        </ButtonBadge>
        <ButtonBadge value={34}>
          <FontAwesomeIcon className='h-4 text-secdark mb-1.5' icon={faCartShopping} />
        </ButtonBadge>
        <Link href='#search'>
          <FontAwesomeIcon className='h-4 text-secdark mb-1.5' icon={faMagnifyingGlass} />
        </Link>
      </div>
    </nav>
  );
}
