import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function HomeSearchResultAddToWish({show, stock}:{show: boolean, stock: number}) {
  return (
    <div 
      className={`${(show && !stock)?'translate-y-0':'translate-y-10'} transition-all duration-500 outline-[2px] flex justify-center items-center -outline-offset-[7px] outline-dashed outline-white h-10 z-10 absolute bottom-0 text-white bg-background w-full`}
    >
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
}
