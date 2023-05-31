'use client'
import Image from 'next/image';
import { useRef, useState }from 'react';
import { francois_one } from "@/app/fonts/fonts";

export default function ProductImage({images,stock}:{images: string[],stock:number}) {
  const [mainImage, setMainImage] = useState(0);
  const [magnifier, setMagnifier] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});
  const ref: any = useRef(null);

  function hadleMouseEnter() {
    setMagnifier(true);
  }

  function hadleMouseLeave() {
    setMagnifier(false);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement>) {
    if(ref.current){
      const {top, left} = ref.current.getBoundingClientRect();
      setPosition({x:(e.clientX - left), y:e.clientY - top});
    }
  }


  return (
    <div className='w-[18rem] h-[30rem]'>
      <div className=''>
        <div className={` relative z-0 transition-all duration-700 ${magnifier?'translate-x-72 opacity-100':'translate-x-0 opacity-0'}`}>
          <div className={`w-full h-[27rem] bg-white overflow-hidden absolute z-0`}>
            <div style={{top:`-${position.y * 2}px`,left:`-${position.x * 2}px`}} className={`absolute w-[54rem]`}>
              <Image 
                width={875} 
                height={750} 
                alt='Product Main Image' 
                src={`${images[mainImage]}`} 
              />
            </div>
          </div>
        </div>
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={hadleMouseEnter}
            onMouseLeave={hadleMouseLeave}
            className='relative w-full h-full'
        >
          {(stock === 0)  && <p className={`z-30 top-3 right-3 absolute rounded-full bg-white text-primary text-[0.5rem] py-1 px-3 ${francois_one.className}`}
          >
            OUT OF STOCK
          </p>}
          <Image 
            className='mb-1 z-20 relative cursor-zoom-in'
            width={375} 
            height={750} 
            alt='Product Main Image' 
            src={`${images[mainImage]}`} 
          />
        </div>
      </div>
      <div className='flex gap-1'>
        <Image 
          width={40} 
          height={80} 
          alt='Product Image' 
          src={`${images[0]}`} 
          onClick={_ => setMainImage(0)}
        />
        <Image 
          width={40} 
          height={80} 
          alt='Product Image' 
          src={`${images[1]}`} 
          onClick={_ => setMainImage(1)}
        />
      </div>
    </div>
  );
}
