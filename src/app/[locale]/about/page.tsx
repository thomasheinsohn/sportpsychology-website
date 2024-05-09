import Image from 'next/image'
import { use } from 'react'
import { Container } from '@/components/Container'
import portraitImage from '@/images/hanna-color.jpeg'
import { useTranslations } from 'next-intl'
import { checkSession } from '../../../../lib'

export default function About() {
  use(checkSession())
  const t = useTranslations('About')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
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
        <div className="lg:pl-20"></div>
      </div>
    </Container>
  )
}
