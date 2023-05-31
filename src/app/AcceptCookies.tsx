'use client'
import { useEffect, useState } from 'react';

export default function AcceptCookies() {
  const [style, setStyle] = useState({translate:true, hide:false});

  useEffect(() => {
    const timeout = setTimeout(() => setStyle({translate: false,hide: false}),2000);
    return () => {
      clearTimeout(timeout);
    };
  },[]);

  function handleClick() {
    setStyle({translate: true, hide: false});
    setTimeout(() => setStyle({translate: true,hide: true}), 800);
  }

  return (
    <div className={`${style.translate && 'translate-y-20'} ${style.hide && 'opacity-0'} transition-all duration-700 p-2 fixed bottom-0 z-30 flex items-center justify-center bg-seclight left-0 w-[100vw]`}>
      <p className="p-1">This website use cookies to improve your experience. We&apos;ll assume you&apos;r ok with this, but you can opt-out if you wish</p>
      <button onClick={handleClick} className='bg-black text-seclight p-1'>Accept</button>
    </div>
  );
}
