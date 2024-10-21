import { useRouter } from 'next/router'

export default function LanguageToggle() {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router

  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push({ pathname, query }, asPath, { locale })
  }

  return (
    <select onChange={changeLanguage} value={locale} className="bg-primary text-white">
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  )
}
