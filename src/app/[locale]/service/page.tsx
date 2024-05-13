import { use } from 'react'
import { checkSession } from '../../../../lib'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

export default function Service() {
  use(checkSession())
  const t = useTranslations('Service')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[2fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="rounded-lg bg-auto px-3  pb-1 ring-2 ring-inset ring-gray-200 dark:ring-zinc-700">
            <div className="mt-7 space-y-7 text-xl font-bold text-zinc-800 dark:text-zinc-100">
              {t('service1')}
            </div>
            <div className="text-l mt-3 space-y-7 text-zinc-700 dark:text-zinc-400">
              {t('service1text')}
            </div>
            <ul className="mt-3 list-inside list-disc text-base text-zinc-600 dark:text-zinc-400">
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
          <div className="rounded-lg bg-auto px-3 pb-1 ring-2 ring-inset ring-gray-200 dark:ring-zinc-700">
            <div className="mt-6 space-y-7 text-xl font-bold text-zinc-800 dark:text-zinc-100">
              {t('service2')}
            </div>
            <div className="text-l mt-3 space-y-7 text-zinc-700 dark:text-zinc-400">
              {t('service2text')}
            </div>
            <ul className="mt-3 list-inside list-disc text-base text-zinc-600 dark:text-zinc-400">
              <li>{t('service2item1')}</li>
              <li>{t('service2item2')}</li>
            </ul>
          </div>
          <div className="rounded-lg bg-auto px-3 pb-1 ring-2 ring-inset ring-gray-200 dark:ring-zinc-700">
            <div className="mt-6 space-y-7 text-xl font-bold text-zinc-800 dark:text-zinc-100">
              {t('service3')}
            </div>
            <div className="text-l mt-3 space-y-7 text-zinc-700 dark:text-zinc-400">
              {t('service3text')}
            </div>
          </div>
          <div className="text-l mt-8 space-y-7 text-zinc-800 dark:text-zinc-100">
            {t('end')}
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  )
}
