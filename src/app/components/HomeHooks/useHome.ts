import {useEffect, useState} from "react"

import db from '@/app/lib/db';
import type { Product, Categories } from "@/app/lib/utils";

export default function useHome(category:string[]): any
{

  const [pageNum, setPageNum] = useState(0);
  const [categories, setCategories] = useState<Categories>({});
  const [searchResult, setSearchResult] = useState([] as Product[]);
  const pages = new Array(Math.floor(searchResult.length / 9) + ((searchResult.length % 9 > 0)? 1:0)).fill(0);

  async function handleSearch(keyword: string) {
    const res = await db.search(keyword);
    setSearchResult(res);
    setPageNum(0);
  }

  async function handleCategories(category: string) {
    const res = await db.category(category);
    setSearchResult(res);
    setPageNum(0);
  }

  useEffect(() => {
    async function getData() {
      if(category[0] === ''){
        const res = await db.randomResults();
        setSearchResult(res);
      } else {
        handleCategories(category[0])
      }
      const cat = await db.categories();
      setCategories(cat);
    }

    getData();
  },[category]);

  return {
    setPageNum,
    pages,
    pageNum,
    handleCategories,
    handleSearch,
    searchResult,
    categories,
  }
}
