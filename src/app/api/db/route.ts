import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { Product } from '@/app/lib/utils';

const DB_DATA = {
  data:undefined,
  //                                 expire in 10min
  expireAt:new Date().getTime() + (1000 * 60 * 10),
};
 
export async function GET(req: NextRequest) {
    const res = await fetch(new URL('/main/db.json', req.url));
    const data = await res.json();
   
    if(!DB_DATA.data || DB_DATA.expireAt <= new Date().getTime()) {
      DB_DATA.data = data.map((obj:Product) => {
        const stock = Math.random() * 2 === 1;
        const rate = Math.round(Math.random() * 5);
        return ({
          ...obj,
          stock,
          rate,
        });
      });
      DB_DATA.expireAt = new Date().getTime() + (1000 * 60 * 10);
    }
  return NextResponse.json(DB_DATA);
}
