import React from 'react';

import { quicksand } from '../../fonts/fonts';

export default function FavLink({children, value}:{children: React.ReactNode, value: number}) {
  return (
    <button className={`relative ${quicksand.className}`}>
      <div 
        className={`${value <= 0 && 'opacity-0'} transition-all absolute -top-2 -right-2 bg-background text-white text-[0.6rem] min-w-[0.85rem] h-3.5 px-[0.2rem] rounded-full`} 
        role='badge'
      >
        {value}
      </div>
      {children}
    </button>
  );
}
