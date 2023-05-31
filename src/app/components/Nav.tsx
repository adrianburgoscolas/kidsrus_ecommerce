//Server Component

import Link from 'next/link';
import { francois_one } from '@/app/fonts/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

//Components
//  Client Component
import NavLink from '@/app/components/Nav/NavLink';
//  Server Component
import ButtonBadge from '@/app/components/Nav/ButtonBadge';

export default function Nav() {

  return (
    <nav 
      className={`z-30 bg-white sticky top-0 p-4 text-primary text-[0.7rem] ${francois_one.className}`}
    >
      <ul className='flex justify-center items-center gap-6'>
        <li>
          <NavLink linkText={'HOME'} />
        </li>
        <li>
          <NavLink linkText={'SEARCH'} />
        </li>
        <li>
          <NavLink linkText={'SHOP FEATURES'} />
        </li>
        <li>
          <NavLink linkText={'CLOTHES'} />
        </li>
        <li>
          <NavLink linkText={'PAGES'} />
        </li>
        <li>
          <NavLink linkText={'SHORT CODES'} />
        </li>
        <li>
          <NavLink linkText={'POST TYPES'} />
        </li>
        <li>
          <div className='flex gap-4'>
            <ButtonBadge value={0}>
              <FontAwesomeIcon className='h-3 text-secdark mb-3' icon={faHeart} />
            </ButtonBadge>
            <ButtonBadge value={3}>
              <FontAwesomeIcon className='h-3 text-secdark mb-3' icon={faCartShopping} />
            </ButtonBadge>
            <Link href='#search'>
              <FontAwesomeIcon className='h-3 text-secdark mb-3' icon={faMagnifyingGlass} />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
