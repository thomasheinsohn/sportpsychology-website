import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/app/[locale]/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: 'Sportpsychologie Berlin Hanna Komes Movementpsychologie',
  description:
    'Ich bin Hanna Komes. Beruflich bin ich als Sportpsychologin und CrossFit-Trainerin unterwegs und begleite Menschen auf dem Weg zu ihren ganz persönlichen Zielen - movementpsychology.',
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
