import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { Link } from '../../../navigation'

import { Container } from '@/components/Container'
import { InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'
import art from '@/images/photos/runner-art.jpeg'
import weight from '@/images/photos/weight.jpg'
import runner from '@/images/photos/runner.jpeg'
import mountain from '@/images/photos/mountain.jpeg'
import tennis from '@/images/photos/tennis.jpeg'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[mountain, tennis, runner, weight, art].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const t = useTranslations('Home')
  return (
    <>
      <Container className="mt-12 sm:mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('toptitle')}
          </h1>
          <div className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('toptitle2')}
          </div>
          <div className="mt-6 text-2xl font-semibold tracking-tight text-zinc-800  dark:text-zinc-100">
            Move with passion & purpose
          </div>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t('title')}
          </p>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            {t('subText')}
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/hanna-komes-590458234"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              {t('subtitle')}
            </h1>
            <div>{t('mainText')}</div>
          </div>
        </div>
      </Container>
    </>
  )
}
