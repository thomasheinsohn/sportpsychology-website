import { type Metadata } from 'next'

import { Providers } from '@/app/[locale]/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Sportpsychologie Komes',
    default: 'Applied sports psychologist Hanna Komes',
  },
  description:
    'Hanna Komes is an applied sports psychologist specializing in mental training and psychological support to optimize athletic performance. Her tailored approaches help athletes overcome barriers, boost resilience, and achieve long-term success.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
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
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
