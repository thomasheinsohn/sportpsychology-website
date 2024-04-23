import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  subTitle,
  subContent,
  children,
}: {
  title: string
  intro: string
  subTitle: string
  subContent: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-10 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
        <h1 className="mt-7 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {subTitle}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {subContent}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
