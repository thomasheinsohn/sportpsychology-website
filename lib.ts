import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

// this value shouldnt be exposed (e.g. environment variable)
const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

const correctHash =
  '$2a$10$SoU4ONlQsECK/VLpDVtzMu5UnwkvekRh/exG7RWQOYAVccxVMKR1e'

export async function passwordHash(password: string) {
  if (bcrypt.compareSync(password, correctHash)) {
    console.log('Login successful')
    return true
  } else {
    console.log('Failed login')
    return false
  }
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 hour from now')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(password: string) {
  const result = await passwordHash(password)
  if (!result) {
    return
  }
  const user = { name: 'client' }
  const expires = new Date(Date.now() + 60 * 60 * 1000)
  const session = await encrypt({ user, expires })
  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true })
  return redirect('/de')
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function checkSession() {
  const session = cookies().get('session')?.value
  if (!session) {
    redirect('/de/login')
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 10 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}
