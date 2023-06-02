'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTop() {
  function handleScroll() {
    console.log('scroll')
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#top');

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }

    }
  }
  return (
    <button 
      onClick={handleScroll}
      title='Home'
      className={`
        flex z-10 justify-center items-center 
        outline-dashed outline-2 outline-white 
        -outline-offset-[7px] fixed bottom-20 
        right-10 bg-background opacity-50 
        hover:opacity-100 transition-all p-4
      `}>
      <FontAwesomeIcon className='h-3 w-3 text-white' icon={faChevronUp}/>
    </button>
  );
}
