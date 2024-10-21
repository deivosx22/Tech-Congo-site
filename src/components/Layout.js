import Head from 'next/head'
import Navigation from './Navigation'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import Notification from './Notification'

const translations = {
  en: {
    allRightsReserved: "All rights reserved."
  },
  fr: {
    allRightsReserved: "Tous droits réservés."
  }
}

export default function Layout({ children }) {
  const { locale, changeLanguage } = useContext(LanguageContext)

  return (
    <>
      <Head>
        <title>Tech Congo</title>
        <meta name="description" content="Modern e-commerce website for tech products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Tech Congo</Link>
          <div className="flex items-center">
            <Navigation />
            <div className="ml-4">
              <button onClick={() => changeLanguage(locale === 'en' ? 'fr' : 'en')}>
                {locale === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">
        {children}
        <Notification />
      </main>
      <footer className="bg-primary text-white mt-8 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Tech Congo. {translations[locale].allRightsReserved}</p>
        </div>
      </footer>
    </>
  )
}
