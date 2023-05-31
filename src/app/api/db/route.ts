import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { Product } from '@/app/lib/utils';

const DB_DATA = {
  data:undefined,
  //                                 expire in 10min
  expireAt:new Date().getTime() + (1000 * 60 * 10),
};
 
export async function GET(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)

  requestHeaders.set("Access-Control-Allow-Origin", "*")
  requestHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  requestHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  const res = await fetch(new URL('/main/db.json', req.url), {cache: 'no-store'});
    const data = await res.json();
   
    if(!DB_DATA.data || DB_DATA.expireAt <= new Date().getTime()) {
      DB_DATA.data = data.map((obj:Product) => {
        const stock = Math.round(Math.random() * 15);
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
