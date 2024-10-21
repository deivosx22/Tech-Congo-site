import { useState, useContext, useCallback } from 'react'
import { useRouter } from 'next/router'
import { LanguageContext } from '../context/LanguageContext'

const translations = {
  en: {
    searchPlaceholder: "Search products...",
    searchButton: "Search",
    clearSearch: "Clear"
  },
  fr: {
    searchPlaceholder: "Rechercher des produits...",
    searchButton: "Rechercher",
    clearSearch: "Effacer"
  }
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  const { locale } = useContext(LanguageContext)

  const debouncedSearch = useCallback((term) => {
    const timeoutId = setTimeout(() => {
      router.push(`/shop?search=${encodeURIComponent(term)}`)
    }, 300)
    return () => clearTimeout(timeoutId)
  }, [router])

  const handleSearch = (e) => {
    e.preventDefault()
    debouncedSearch(searchTerm)
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    debouncedSearch(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
    router.push('/shop')
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={translations[locale].searchPlaceholder}
          className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={translations[locale].searchPlaceholder}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={translations[locale].clearSearch}
          >
            &#x2715;
          </button>
        )}
      </div>
      <button 
        type="submit" 
        className="bg-secondary text-primary px-4 py-2 rounded-r hover:bg-primary hover:text-secondary transition-colors duration-300"
      >
        {translations[locale].searchButton}
      </button>
    </form>
  )
}
