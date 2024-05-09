import { use } from 'react'
import { checkSession } from '../../../../lib'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

function PersonalDevelopmentTopics1en() {
  return (
    <ul>
      <li>Learning and optimizing movement patterns through visualization</li>
      <li>Comeback after injuries</li>
      <li>Dealing with (chronic) pain</li>
      <li>Dealing with personal crises & difficult situations</li>
      <li>Relaxation</li>
      <li>Strengthening self-confidence in your own abilities</li>
      <li>Developing (competition) routines</li>
      <li>Team building & conflict management</li>
      <li>Other personal concerns</li>
    </ul>
  )
}
// export default PersonalDevelopmentTopics;

function PersonalDevelopmentTopics2de() {
  return (
    <ul>
      <li>
        CrossFit & funktionelles Training für deine allgemeine Fitness und dein
        Wohlbefinden
      </li>
      <li>
        CrossFit & funktionelles Training ergänzend zu deiner spezifischen
        Sportart
      </li>
    </ul>
  )
}
function PersonalDevelopmentTopics2en() {
  return (
    <ul>
      <li>
        CrossFit & functional training for your overall fitness and well-being
      </li>
      <li>
        CrossFit & functional training as a complement to your specific sport
      </li>
    </ul>
  )
}

export default function Service() {
  use(checkSession())
  const t = useTranslations('Service')
  return (
    <Container className="mt-10 sm:mt-16">
      <div className="gap-y-16 lg:gap-y-12">
        <div className="max-w-xs px-2.5 lg:max-w-none"></div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl  dark:text-zinc-100">
            {t('title')}
          </h1>
          <div className="mt-6 space-y-7 text-xl text-zinc-600 dark:text-zinc-400">
            {t('service1')}
          </div>
          {/* <GenerateMetadata /> */}
          <div className="mt-6 space-y-7 text-xl text-zinc-600 dark:text-zinc-400">
            {t('service2')}
          </div>
          <div className="mt-6 space-y-7 text-xl text-zinc-600 dark:text-zinc-400">
            {t('service3')}
          </div>
          <div className="mt-6 space-y-7 text-xl  text-zinc-600 dark:text-zinc-400">
            {t('service3text')}
          </div>
          <div className="mt-6 space-y-7 text-xl text-zinc-600 dark:text-zinc-400">
            {t('end')}
          </div>
        </div>
      </div>
    </Container>
  )
}
