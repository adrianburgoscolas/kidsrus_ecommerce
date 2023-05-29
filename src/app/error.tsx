'use client'; // Error components must be Client Components
 
import { francois_one } from "@/app/fonts/fonts"
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className={`grow text-center text-primary ${francois_one.className}`}>
      <h2>Something went wrong!</h2>
      <button
        className='mt-4 px-4 py-2 outline-white -outline-offset-[7px] outline-2 outline-dashed bg-background text-white'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
