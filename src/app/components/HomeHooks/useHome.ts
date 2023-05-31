import {useEffect, useState} from "react"

import db from '@/app/lib/db';
import type { Product, Categories } from "@/app/lib/utils";

export default function useHome(): any
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
      const res = await db.randomResults();
      setSearchResult(res);
      const cat = await db.categories();
      setCategories(cat);
    }

    getData();
  },[]);

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
