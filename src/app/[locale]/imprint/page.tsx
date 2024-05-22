import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'

export default function Imprint() {
  const t = useTranslations('Imprint')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none"></div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="mt-10 space-y-10">
            <div className="text-lg text-zinc-600 dark:text-zinc-400">
              <div className="font-bold">Seitenbetreiber:</div>
              <p>Hanna Komes, Argentinische Allee 158, 14169 Berlin</p>
            </div>
            <div className="text-lg text-zinc-600 dark:text-zinc-400">
              <div className="font-bold">Kontakt:</div>
              <p>hanna.komes@gmail.com</p>
            </div>
            <div className="text-lg text-zinc-600 dark:text-zinc-400">
              <div>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Hanna Komes
                Adresse wie oben
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
