import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'

export default function Policy() {
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
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die
              Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
              darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich.
            </p>
            {/* <p>
              Datenerfassung auf unserer Webseite Wer ist verantwortlich für die
              Datenerfassung auf dieser Webseite? Die Datenverarbeitung auf
              dieser Webseite erfolgt durch den Webseitenbetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Webseite entnehmen.
            </p> */}
          </div>
        </div>
      </div>
    </Container>
  )
}
