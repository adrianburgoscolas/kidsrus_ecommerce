import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function HomeSearch({setKeyword}:{setKeyword: Function}) {
  const [textInput, setTextInput] = useState('');

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setKeyword(textInput);
    setTextInput('');
  }

  return (
    <form className='flex'>
      <input 
        onChange={e => setTextInput(e.currentTarget.value)}
        value={textInput}
        className='text-sm text-secdark w-20 flex-auto border-2 border-dotted pl-4 focus:outline-2 focus:outline outline-seclight' 
        type='text' 
        placeholder='Search products...'
      />
      <button title='Search Product' onClick={handleSubmit} className='flex-none bg-background w-10 h-10 flex justify-center items-center'>
        <div className='w-8 h-8 border-2 border-dashed flex justify-center items-center'>
        <FontAwesomeIcon className='text-seclight w-3 h-3' icon={faMagnifyingGlass} />
        </div>
      </button>
    </form>
  );
}
