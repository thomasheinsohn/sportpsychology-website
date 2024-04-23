import { Link } from '../../navigation'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { GitHubIcon } from './SocialIcons'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-sky-500 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({
  className,
  href,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
      </Link>
    </li>
  )
}

export function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">{t('about')}</NavLink>
                <NavLink href="/service">Service</NavLink>
                <NavLink href="/contact">{t('contact')}</NavLink>
                <NavLink href="/imprint">{t('imprint')}</NavLink>
                <NavLink href="/policy">{t('policy')}</NavLink>
              </div>
              <p className="flex text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()}, Hanna Komes. All rights
                reserved.
              </p>
              {/* <SocialLink
                href="https://github.com/thomasheinsohn"
                icon={GitHubIcon}
                className="ml-3"
              /> */}
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
