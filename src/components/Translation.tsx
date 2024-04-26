import { useTranslations } from 'next-intl'
import { DesktopNavigation, Header } from './Header'

export default function Translation() {
  const t = useTranslations('Header')
  return <Header about={t('about')} contact={t('contact')}></Header>
}
