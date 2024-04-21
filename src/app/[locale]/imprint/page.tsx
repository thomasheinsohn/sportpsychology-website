import Image from 'next/image'
import clsx from 'clsx'
import { Link } from '../../../../navigation'
import { use } from 'react'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { useTranslations } from 'next-intl'
import { checkSession } from '../../../../lib'

export default function Imprint() {
  use(checkSession())
  const t = useTranslations('Imprint')
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none"></div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Seitenbetreiber: Max Mustermann Musterstraße 1 12345 Musterstadt
              Deutschland
            </p>
            <p>
              Kontakt: Telefon: 01234 56789 Telefax: 01234 56789-0 E-Mail:
              info@musterwebseite.de
            </p>
            <p>Umsatzsteuer-Identifikationsnummer: DE123456789</p>
            <p>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Max
              Mustermann Adresse wie oben
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
