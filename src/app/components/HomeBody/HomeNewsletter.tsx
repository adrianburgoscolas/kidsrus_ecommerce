import { francois_one, gilda } from "@/app/fonts/fonts";
export default function HomeNewsletter() {
  return (
    <form className='mt-9 bg-background px-5 h-52 flex flex-col justify-center items-center text-center'>
      <label className={`${gilda.className} text-2xl text-white grow flex items-center`} htmlFor='newsletter'><span>Join Our Newsletter</span></label>
      <input 
        name='newsletter'
        id='newsletter'
        className='focus:outline-none w-full placeholder:bg-background bg-background placeholder:text-white text-white text-[0.7rem] py-2 px-3 border-dashed border-2 mb-1' 
        type='email' 
        placeholder='Your Email Address*'
      />
    <button 
      className={`${francois_one.className} bg-white text-[0.6rem] text-bold text-background outline-background -outline-offset-[5px] outline-2 outline-dashed p-3 block my-3 w-full`}>SUBSCRIBE</button>
    </form>
  );
}
