import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const translations = {
  en: {
    viewDetails: "View Details"
  },
  fr: {
    viewDetails: "Voir les détails"
  }
}

export default function ProductCard({ id, name, price, image, description, priority = false }) {
  const { locale } = useContext(LanguageContext)

  return (
    <div className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48">
        <Image 
          src={image} 
          alt={`Product image of ${name}`} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-primary">{name}</h3>
        <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>
        <Link 
          href={`/product/${id}`} 
          className="btn bg-secondary text-primary w-full py-2 rounded text-center hover:bg-primary hover:text-secondary transition-colors duration-300"
        >
          {translations[locale].viewDetails}
        </Link>
      </div>
    </div>
  )
}
