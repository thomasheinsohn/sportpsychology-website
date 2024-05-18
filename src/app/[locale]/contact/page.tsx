import Image from 'next/image'
import clsx from 'clsx'
import { Link } from '../../../../navigation'
import { Container } from '@/components/Container'
import { LinkedInIcon, LocationPin } from '@/components/SocialIcons'
import portraitImage from '@/images/hanna.jpg'
import { useTranslations } from 'next-intl'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Contact() {
  const t = useTranslations('Contact')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="mt-6 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
            <p>{t('text1')}</p>
            <p>{t('text2')}</p>
            <p>{t('text3')}</p>
            <p>{t('text4')}</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              icon={LocationPin}
              href="https://maps.app.goo.gl/fsEh1zjDQdXveVdr8?g_st=ia"
              className=""
            >
              Berlin, Wilmersdorf
            </SocialLink>
            <SocialLink
              href="mailto:hanna.komes@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              hanna.komes@gmail.com
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/hanna-komes-590458234"
              icon={LinkedInIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {t('linkedin')}
            </SocialLink>
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
          </ul>
        </div>
      </div>
    </Container>
  )
}
