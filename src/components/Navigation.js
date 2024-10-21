import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { LanguageContext } from '../context/LanguageContext'

const translations = {
  en: {
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",
    cart: "Cart"
  },
  fr: {
    home: "Accueil",
    shop: "Boutique",
    about: "À propos",
    contact: "Contact",
    cart: "Panier"
  }
}

export default function Navigation() {
  const { cart } = useContext(CartContext)
  const { locale } = useContext(LanguageContext)
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:text-secondary">{translations[locale].home}</Link></li>
        <li><Link href="/shop" className="hover:text-secondary">{translations[locale].shop}</Link></li>
        <li><Link href="/about" className="hover:text-secondary">{translations[locale].about}</Link></li>
        <li><Link href="/contact" className="hover:text-secondary">{translations[locale].contact}</Link></li>
        <li>
          <Link href="/cart" className="hover:text-secondary flex items-center">
            {translations[locale].cart}
            {itemCount > 0 && (
              <span className="ml-1 bg-secondary text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
