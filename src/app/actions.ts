'use server'

import { login } from '../../lib'

export async function createForm(prevState: any, formData: FormData) {
  const password = formData.get('password')

  if (typeof password === 'string') {
    await login(password)
  } else {
    throw new Error('Password is required and must be a string.')
  }
  return {
    message: 'Incorrect password. Please try again.',
  }
}
