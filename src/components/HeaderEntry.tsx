import { Header } from './Header'
import { useTranslations } from 'next-intl'

export default function HeaderEntry() {
  const t = useTranslations('Header')
  return (
    <Header about={t('about')} service={t('service')} contact={t('contact')} />
  )
}
