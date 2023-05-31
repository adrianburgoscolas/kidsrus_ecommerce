import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rate({rate}:{rate:number}) {
  return (
    <div className='flex'>
      <FontAwesomeIcon className={`h-3 w-3 ${rate > 0?'text-background':'text-seclight'}`} icon={faStar} />
      <FontAwesomeIcon className={`h-3 w-3 ${rate > 1?'text-background':'text-seclight'}`} icon={faStar} />
      <FontAwesomeIcon className={`h-3 w-3 ${rate > 2?'text-background':'text-seclight'}`} icon={faStar} />
      <FontAwesomeIcon className={`h-3 w-3 ${rate > 3?'text-background':'text-seclight'}`} icon={faStar} />
      <FontAwesomeIcon className={`h-3 w-3 ${rate > 4?'text-background':'text-seclight'}`} icon={faStar} />
    </div>
  );
}
