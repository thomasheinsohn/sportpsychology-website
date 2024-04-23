import { use } from 'react'
import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'
import { checkSession } from '../../../../lib'

export default function Policy() {
  use(checkSession())
  const t = useTranslations('Imprint')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none"></div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Datenschutzerklärung
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Allgemeine Hinweise Die folgenden Hinweise geben einen einfachen
              Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie unsere Webseite besuchen. Personenbezogene Daten sind
              alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <p>
              Datenerfassung auf unserer Webseite Wer ist verantwortlich für die
              Datenerfassung auf dieser Webseite? Die Datenverarbeitung auf
              dieser Webseite erfolgt durch den Webseitenbetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Webseite entnehmen.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
