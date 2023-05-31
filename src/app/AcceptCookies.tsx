'use client'
import { useEffect, useState } from 'react';

export default function AcceptCookies() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true),3000);
    return () => {
      clearTimeout(timeout);
    };
  },[]);
  return (
    <div className={`${!show && 'translate-y-20'} transition-all duration-700 p-2 fixed bottom-0 z-30 flex items-center justify-center bg-seclight left-0 w-[100vw]`}>
      <p className="p-1">This website use cookies to improve your experience. We&apos;ll assume you&apos;r ok with this, but you can opt-out if you wish</p>
      <button onClick={_ => setShow(false)} className='bg-black text-seclight p-1'>Accept</button>
    </div>
  );
}
