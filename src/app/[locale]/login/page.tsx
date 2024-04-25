'use client'
import { Container } from '@/components/Container'
import { useFormState } from 'react-dom'
import { createForm } from '../actions'

const initialState = {
  message: '',
}

export default function Page() {
  const [state, formAction] = useFormState(createForm, initialState)

  return (
    <div className="mt-32 flex-col content-center items-center justify-center text-center">
      <h1 className="flex justify-center gap-2 text-center text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
        This website is currently under construction
      </h1>
      <Container className="flex flex-col items-center py-8 text-center sm:py-8 lg:py-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          Login
        </h1>
        <section>
          <form action={formAction}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="m-2 p-1"
            />
            <br />
            <button
              type="submit"
              className="text-base font-medium text-sky-600 hover:text-sky-800"
            >
              Login
              <span aria-hidden="true">&rarr;</span>
            </button>
          </form>
          {state?.message && (
            <p className="mt-4 text-lg tracking-tight text-red-600">
              {state?.message}
            </p>
          )}
        </section>
      </Container>
    </div>
  )
}
