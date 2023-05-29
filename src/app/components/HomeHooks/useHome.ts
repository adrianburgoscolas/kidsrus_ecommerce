import {useEffect, useState} from "react"

import db from '@/app/lib/db';
import type { Product, Categories } from "@/app/lib/utils";

export default function useHome(category: string): any
{

  const [categories, setCategories] = useState<Categories>({});
  const [randomResult, setRandomResult] = useState([] as Product[]);
  const [categoryResult, setCategoryResult] = useState([] as Product[])

  useEffect(() => {

    async function getData() {
      const cat = await db.categories();
      setCategories(cat);
      if(category !== '') {
        const catres = await db.category(category);
        setCategoryResult(catres);
      } else {
        const res = await db.randomResults();
        setRandomResult(res);
      }
    }

    getData();
  },[category]);

  return {
    categoryResult,
    categories,
    randomResult,
  }
}
