'use client'
import Link from 'next/link';
import { francois_one } from '../fonts/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import NavLink from './Nav/NavLink';
import ButtonBadge from './Nav/ButtonBadge';

export default function Nav() {
  const [isActive, setIsActive] = useState<string>('HOME');

  return (
    <nav 
      className={`sticky top-0 p-4 text-primary flex justify-center items-center gap-6 text-[0.75rem] ${francois_one.className}`}
    >
      <NavLink isActive={isActive} setIsActive={setIsActive} linkText={'HOME'} />
      <NavLink isActive={isActive} setIsActive={setIsActive} linkText={'SHOP FEATURES'} />
      <NavLink isActive={isActive} setIsActive={setIsActive} linkText={'CLOTHES'} />
      <NavLink isActive={isActive} setIsActive={setIsActive} linkText={'PAGES'} />
      <NavLink isActive={isActive} setIsActive={setIsActive} linkText={'SHORT CODES'} />
      <NavLink isActive={isActive} setIsActive={setIsActive} linkText={'POST TYPES'} />
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
