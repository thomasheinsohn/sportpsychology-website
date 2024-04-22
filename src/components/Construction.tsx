import { useTranslations } from 'next-intl'

export default function Construction() {
  const t = useTranslations('Login')
  return <div>{t('title')}</div>
}
