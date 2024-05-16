import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/app/[locale]/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title:
    'Sportpsychologin Hanna Komes in Berlin Online & Vor Ort | Deutsch & Englisch',
  description:
    'Entdecken Sie maßgeschneiderte sportpsychologische Trainings und funktionelles Training mit Hanna Komes in Berlin. Ob online oder persönlich – verbessern Sie Ihre Leistung durch Visualisierungstechniken, Überwindung von Verletzungen, Krisenmanagement, Teambuilding und mehr. Jetzt Beratung auf Deutsch oder Englisch vereinbaren!',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-100 dark:bg-black">
        <Analytics />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
