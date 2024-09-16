import { signInWithPassword } from '@/http/sign-in-with-password'

export async function signInWithEmailAndPassword(data: FormData) {
  'use server'

  const { email, password } = Object.fromEntries(data)

  const result = await signInWithPassword({
    email: String(email),
    password: String(password),
  })

  console.log(result)
}
