import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { francois_one } from '@/app/fonts/fonts';

export default function HomeSearchResultAddToCart({show, stock}:{show: boolean, stock: number}) {
  return (
    <div 
      className={`${(show && stock)?'translate-y-0':'translate-y-10'} transition-all duration-500 outline-[2px] flex justify-center items-center -outline-offset-[7px] outline-dashed outline-white h-10 z-10 absolute bottom-0 text-white bg-background w-full`}
    >
      <div className='flex w-full mx-5 justify-between items-center font-bold text-xs'>
        <FontAwesomeIcon icon={faHeart} />
        <p className={`${francois_one.className}`}>ADD TO CART</p>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

