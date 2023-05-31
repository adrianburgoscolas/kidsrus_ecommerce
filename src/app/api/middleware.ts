import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  requestHeaders.set("Access-Control-Allow-Origin", "*")
  requestHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  requestHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  return response
}
