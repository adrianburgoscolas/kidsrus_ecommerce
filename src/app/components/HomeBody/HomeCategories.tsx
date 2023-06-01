import { Categories } from "@/app/lib/utils";
import { francois_one } from "@/app/fonts/fonts";

export default function HomeCategories({categories, handleCategories}: {categories: Categories, handleCategories: Function}) {

  const list = Object.keys(categories).sort((a, b) => categories[b] - categories[a]).map(category => (
    <li 
      className='font-bold flex justify-between py-2'
      key={category}
      
    >
      <p 
        onClick={_ => handleCategories(category)}
        className='cursor-pointer text-primary hover:text-background transition-all'>For <span className='capitalize'>{category}</span></p>
      <p className='text-secdark'>({categories[category]})</p>
    </li>
  ));

  return (
    <section>
      <h2 className={`text-primary text-lg mb-4 mt-9 ${francois_one.className}`}>CATEGORIES</h2>
      <ul className='divide-y text-[0.7rem] p-3 border-2 border-dotted min-h-[12.5rem]'>
        {list}
      </ul>
    </section>
  );
}
