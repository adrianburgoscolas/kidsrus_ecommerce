import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (request.nextUrl.pathname.startsWith("/api")) {
    response.headers.append("Access-Control-Allow-Origin", "*")
    response.headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS')
    response.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }
  //...
  return response
}
