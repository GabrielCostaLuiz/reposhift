import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone()

  redirectUrl.pathname = '/auth'

  const cookiesResponse = await cookies()

  cookiesResponse.delete('token')

  return NextResponse.redirect(redirectUrl)
}
