import {useEffect, useState} from "react"

import db from '@/app/lib/db';

export default function useHome() {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    async function getData() {
      const data = await db.categories();
      setCategories(data);
    }
    getData();
  },[]);

  return {
    categories
  }
}
