import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const translations = {
  en: {
    welcome: "Welcome to Tech Congo",
    discover: "Discover the latest in technology and gadgets.",
    shopNow: "Shop Now"
  },
  fr: {
    welcome: "Bienvenue chez Tech Congo",
    discover: "Découvrez les dernières technologies et gadgets.",
    shopNow: "Acheter maintenant"
  }
}

export default function Home() {
  const { locale } = useContext(LanguageContext)

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6">{translations[locale].welcome}</h1>
      <p className="text-xl mb-8">{translations[locale].discover}</p>
      <Link href="/shop" className="btn">
        {translations[locale].shopNow}
      </Link>
    </div>
  )
}
