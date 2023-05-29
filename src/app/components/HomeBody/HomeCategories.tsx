import type { Categories } from "@/app/lib/utils";
import { francois_one } from "@/app/fonts/fonts";
export default function HomeCategories({categories, handleCategories}: {categories: Categories, handleCategories: Function}) {
  const list = Object.keys(categories).sort((a, b) => categories[b] - categories[a]).map(category => (
    <li 
      className='cursor-pointer font-bold flex justify-between py-2'
      key={category}
      onClick={_ => handleCategories(category)}
    >
      <p className='text-primary'>For {category.split('')[0].toUpperCase() + category.slice(1)}</p>
      <p className='text-secdark'>({categories[category]})</p>
    </li>
  ));
  return (
    <section>
      <h2 className={`text-primary text-lg mb-4 mt-9 ${francois_one.className}`}>CATEGORIES</h2>
      <ul className='divide-y text-[0.7rem] p-3 border-2 border-dotted min-h-[8rem]'>
        {list}
      </ul>
    </section>
  );
}
