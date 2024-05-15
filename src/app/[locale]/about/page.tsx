import Image from 'next/image'
import { Container } from '@/components/Container'
import portraitImage from '@/images/hanna-color.jpeg'
import { useTranslations } from 'next-intl'
import { Link } from '../../../../navigation'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-sky-500 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

export default function About() {
  const t = useTranslations('About')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs rotate-3 px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>{t('content1')}</p>
            <p>{t('content2')}</p>
            <p>{t('content3')}</p>
          </div>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            {t('subtitle')}
          </h2>
          <p className="mt-4 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {t('philosophy')}
          </p>
        </div>
        <div className="flex items-start justify-start lg:justify-end">
          <div>
            <button
              type="button"
              className="group mr-3 justify-around rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <NavLink href="/service">Services</NavLink>
            </button>
          </div>
          {/* <div className="mt-2">Kontaktiere mich:</div> */}
          <button
            type="button"
            className="group justify-around rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          >
            <NavLink href="/contact">{t('contact')}</NavLink>
          </button>
        </div>
      </div>
    </Container>
  )
}
