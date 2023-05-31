'use client'
import {francois_one} from "@/app/fonts/fonts";
import { useState } from "react";

export default function ProductAddToCart() {

  const [input, setInput] = useState('1');

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setInput('1');
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if(/^\d*$/gi.test(e.currentTarget.value)){
      setInput(e.currentTarget.value);
    }
  }

  return (
    <form>
      <input className='border-2 border-dotted p-2 w-12 text-secdark mr-1 focus:outline-none' type='text' value={input} onChange={handleInput} />
      <button 
        className={`outline-2 outline-dashed -outline-offset-[7px] py-3 px-9 text-[0.5rem] text-white bg-background ${francois_one.className}`} 
        onClick={handleSubmit}
      >
        ADD TO CART
      </button>
    </form>
  );
}
