'use client'
import Image from 'next/image';

import { gilda, francois_one, quicksand } from '@/app/fonts/fonts';
import Active from '@/app/images/home-8.png'
import avatar from '@/app/images/85069033_185901059177965_6767010623440980864_nlow.jpg'
import {useState} from 'react';

import Rate from '@/app/components/Rate';

export default function ProductInfo({description,info,name,rate,stock}:{description:string,info:{[index:string]:string},name:string,rate:number,stock:number}) {
  const [nav, setNav] = useState('description')



  return (
    <section className='w-[50rem] mx-auto mt-12'>
      <nav className='mb-5'>
        <ul className={`flex gap-8 justify-center text-primary ${francois_one.className}`}>
          <li onClick={_ => setNav('description')} className={`${nav === 'description' && 'text-background'} cursor-pointer flex flex-col items-center justify-center`}>
            <p>DESCRIPTION</p>
            <Image className={`${nav === 'description'?'opacity-100':'opacity-0'} transition-all`} width={32} src={Active} alt='Active' />
          </li>
          {(stock !== 0) &&
            <li onClick={_ => setNav('additional')} className={`${nav === 'additional' && 'text-background'} cursor-pointer flex flex-col items-center justify-center`}>
            <p>ADDITIONAL INFORMATION</p>
            <Image className={`${nav === 'additional'?'opacity-100':'opacity-0'} transition-all`} width={32} src={Active} alt='Active' />
            </li>
            }
          <li onClick={_ => setNav('review')} className={`${nav === 'review' && 'text-background'} cursor-pointer flex flex-col items-center justify-center`}>
            <p>REVIEWS</p>
            <Image className={`${nav === 'review'?'opacity-100':'opacity-0'} transition-all`} width={32} src={Active} alt='Active' />
          </li>
        </ul>
      </nav>
      <div className={`relative text-[0.7rem] font-bold text-secdark overflow-hidden z-10 ${nav === 'review'?'h-[40rem]':'h-56'}`}>
        {/*DESCRIPTION*/}
        <p className={`absolute transition-all duration-700 ${nav === 'description'?'translate-y-0':'translate-y-[40rem]'}`}>{description}</p>
        {/*ADDITIONAL INFORMATION*/}
        <div className={`absolute border-2 border-dotted px-2 font-bold text-secdark transition-all duration-700 ${nav === 'additional'?'translate-y-0':'translate-y-[40rem]'}`}>
          <table className='table-fixed w-full'>
            <thead>
              <th className={`w-32 ${francois_one.className}`}></th>
              <th></th>
            </thead>
            <tbody className='divide-y-[1px]'>
              <tr>
                <td className='text-primary p-2'>Color</td>
                <td>{info.color}</td>
              </tr>
              <tr>
                <td className='text-primary p-2'>Material</td>
                <td><span className='capitalize'>{info.material}</span></td>
              </tr>
              <tr>
                <td className='text-primary p-2'>Age</td>
                <td>{info.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*REVIEW*/}
        <div className={`absolute transition-all duration-700 ${nav === 'review'?'translate-y-0':'translate-y-[40rem]'}`}>
          <h3 className={`mb-2 text-primary ${gilda.className}`}>1 Review for {name}</h3>
          <div className='flex gap-4 border-2 border-dotted p-4'>
            <div className='w-32'>
              <Image className='rounded-full' width={50} src={avatar} alt='Avatar' />
            </div>
            <div>
              <div className='flex mb-2 text-primary'>
                <p className={`mr-4 ${gilda.className}`}>Nina </p>
                <p className={`${quicksand.className}`}> May 30, 2023</p>
              </div>
              <Rate rate={rate} />
              <p className='my-2'>{description}</p>
              <p>Rated {rate} of 5</p>
            </div>
          </div>
          <h3 className={`mt-16 text-center ${gilda.className}`}>Add a review</h3>
          <form className='h-80 border-2 border-dotted p-4 flex flex-col'>
            <p className='text-center'>Your email address will not be published. Required fields are marked*</p>
            <p className='text-primary'>Your Rating*</p>
            <Rate rate={0}/>
            <div className='grow flex flex-col justify-center items-center'>
              <textarea className='w-full h-20 px-3 py-2 mt-8 border-2 border-dotted' placeholder='Your review'></textarea>
              <div className='flex gap-4 justify-center my-4'>
                <div>
                  <label className='block text-primary' htmlFor='Name'>Name*</label>
                  <input className='p-2 block border-2 border-dotted' id='Name' name='Name' type='text'></input>
                </div>
                <div>
                  <label className='block text-primary' htmlFor='Email'>Email*</label>
                  <input className='p-2 block border-2 border-dotted' id='Email' name='Email' type='email'></input>
                </div>
                </div>
              <button 
                onClick={e => e.preventDefault()}
                className='bg-background text-white text-[0.6rem] px-8 py-3 outline-2 outline-dashed -outline-offset-[7px]'
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
