// import { trpc } from '@repo/context/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value
  if (!refreshToken) return NextResponse.redirect(new URL('/signin', request.url))
  // trpc.auth.whoami.
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dash/:path*']
}