import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isAuthPage = pathname === '/app/login' || pathname === '/app/signup'
  const isAppRoute = pathname.startsWith('/app') && !isAuthPage

  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) =>
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          ),
      },
    }
  )

  const { data: { user }, error } = await supabase.auth.getUser()

  console.log('MIDDLEWARE DEBUG:', { pathname, isAuthPage, isAppRoute, user: !!user, error: error?.message })

  if (isAppRoute && !user) {
    return NextResponse.redirect(new URL('/app/login', request.url))
  }

  if (isAuthPage && user) {
    return NextResponse.redirect(new URL('/app', request.url))
  }

  return response
}

export const config = {
  matcher: ['/app/:path+'],
}