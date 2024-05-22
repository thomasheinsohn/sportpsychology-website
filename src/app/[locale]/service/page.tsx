import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
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

export default function Service() {
  const t = useTranslations('Service')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[2fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="mt-6 space-y-6 text-zinc-800 dark:text-zinc-100">
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-zinc-800">
              <div className="text-xl font-bold">{t('service1')}</div>
              <div className="text-l mt-3">{t('service1text')}</div>
              <ul className="mt-3 list-inside list-disc text-base">
                <li>{t('service1item1')}</li>
                <li>{t('service1item2')}</li>
                <li>{t('service1item3')}</li>
                <li>{t('service1item4')}</li>
                <li>{t('service1item5')}</li>
                <li>{t('service1item6')}</li>
                <li>{t('service1item7')}</li>
                <li>{t('service1item8')}</li>
                <li>{t('service1item9')}</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-zinc-800">
              <div className="text-xl font-bold">{t('service2')}</div>
              <div className="text-l mt-3">{t('service2text')}</div>
              <ul className="mt-3 list-inside list-disc text-base">
                <li>{t('service2item1')}</li>
                <li>{t('service2item2')}</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-zinc-800">
              <div className="text-xl font-bold">{t('service3')}</div>
              <div className="text-l mt-3">{t('service3text')}</div>
            </div>
            <div className="text-l mt-8 ">{t('end')}</div>
            <button
              type="button"
              className="group justify-around rounded-full bg-gray-100 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <NavLink href="/contact">{t('contact')}</NavLink>
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
