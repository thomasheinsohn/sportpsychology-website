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
          <div className="mt-10 space-y-10">
            <div className="space-y-4 text-base">
              <p className="font-semibold">
                Verantwortliche Stelle im Sinne der Datenschutzgesetze,
                insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
              </p>
              <p>Hanna Komes, hanna.komes@gmail.com</p>
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
                ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir
                weisen darauf hin, dass die Datenübertragung im Internet (z.B.
                bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich.
              </p>
            </div>
            <div className="space-y-4 text-base">
              <p className="font-semibold">
                Zwecke der Datenverarbeitung durch die verantwortliche Stelle
                und Dritte
              </p>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen
                als den genannten Zwecken findet nicht statt. Wir geben Ihre
                persönlichen Daten nur an Dritte weiter, wenn:
              </p>
              <ul className="list-inside list-disc">
                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
                <li>
                  die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen
                  erforderlich ist,
                </li>
                <li>
                  die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
                  erforderlich ist,
                </li>
              </ul>
              <p>
                die Verarbeitung zur Wahrung berechtigter Interessen
                erforderlich ist und kein Grund zur Annahme besteht, dass Sie
                ein überwiegendes schutzwürdiges Interesse an der
                Nichtweitergabe Ihrer Daten haben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
