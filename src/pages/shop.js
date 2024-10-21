import { useRouter } from 'next/router'
import Head from 'next/head'
import { useContext, useMemo, useState, useEffect, useCallback } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import LoadingSpinner from '../components/LoadingSpinner'
import BackToTop from '../components/BackToTop'
import CartSummary from '../components/CartSummary'
import { LanguageContext } from '../context/LanguageContext'
import { CartContext } from '../context/CartContext'
import { useNotification } from '../context/NotificationContext'
import { products } from '../data/products'

const translations = {
  en: {
    ourProducts: "Our Products",
    noProductsFound: "No products found matching your search.",
    addToCart: "Add to Cart",
    loading: "Loading products...",
    error: "An error occurred while loading products. Please try again.",
    previous: "Previous",
    next: "Next",
    page: "Page",
    sortBy: "Sort by:",
    priceLowToHigh: "Price: Low to High",
    priceHighToLow: "Price: High to Low",
    nameAZ: "Name: A-Z",
    nameZA: "Name: Z-A",
    addedToCart: "Added to cart!"
  },
  fr: {
    ourProducts: "Nos Produits",
    noProductsFound: "Aucun produit trouvé correspondant à votre recherche.",
    addToCart: "Ajouter au panier",
    loading: "Chargement des produits...",
    error: "Une erreur s'est produite lors du chargement des produits. Veuillez réessayer.",
    previous: "Précédent",
    next: "Suivant",
    page: "Page",
    sortBy: "Trier par:",
    priceLowToHigh: "Prix: Croissant",
    priceHighToLow: "Prix: Décroissant",
    nameAZ: "Nom: A-Z",
    nameZA: "Nom: Z-A",
    addedToCart: "Ajouté au panier!"
  }
}

const PRODUCTS_PER_PAGE = 6

export default function Shop() {
  const router = useRouter()
  const { search } = router.query
  const { locale } = useContext(LanguageContext)
  const { cart, addToCart } = useContext(CartContext)
  const { showNotification } = useNotification()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('priceLowToHigh')

  const sortedAndFilteredProducts = useMemo(() => {
    let result = products;
    
    if (search) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sortOption) {
      case 'priceLowToHigh':
        return result.sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return result.sort((a, b) => b.price - a.price);
      case 'nameAZ':
        return result.sort((a, b) => a.name.localeCompare(b.name));
      case 'nameZA':
        return result.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return result;
    }
  }, [search, sortOption]);

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = sortedAndFilteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
    showNotification(translations[locale].addedToCart, 'success');
  }, [addToCart, locale, showNotification]);

  const handleSortChange = useCallback((e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to first page when sorting changes
  }, []);

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div className="text-center py-10 text-red-500" role="alert">{translations[locale].error}</div>
  }

  return (
    <>
      <Head>
        <title>{translations[locale].ourProducts} | Tech Congo</title>
        <meta name="description" content="Explore our wide range of high-quality tech products at Tech Congo. Find the latest smartphones, laptops, and accessories." />
        <meta name="keywords" content="tech products, smartphones, laptops, accessories, Tech Congo" />
        <meta property="og:title" content="Our Products | Tech Congo" />
        <meta property="og:description" content="Explore our wide range of high-quality tech products at Tech Congo. Find the latest smartphones, laptops, and accessories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techcongo.com/shop" />
        <meta property="og:image" content="https://techcongo.com/images/og-image.jpg" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">{translations[locale].ourProducts}</h1>
        <div className="mb-8">
          <SearchBar />
        </div>
        <div className="mb-4 flex justify-end">
          <label htmlFor="sort" className="mr-2">{translations[locale].sortBy}</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded px-2 py-1"
            aria-label="Sort products"
          >
            <option value="priceLowToHigh">{translations[locale].priceLowToHigh}</option>
            <option value="priceHighToLow">{translations[locale].priceHighToLow}</option>
            <option value="nameAZ">{translations[locale].nameAZ}</option>
            <option value="nameZA">{translations[locale].nameZA}</option>
          </select>
        </div>
        {paginatedProducts.length === 0 ? (
          <p className="text-lg text-gray-600">{translations[locale].noProductsFound}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProducts.map((product, index) => (
                <div key={product.id} className="flex flex-col transform transition duration-300 hover:scale-105">
                  <ProductCard {...product} priority={index === 0} />
                  <button 
                    onClick={() => handleAddToCart(product)} 
                    className="mt-4 btn bg-secondary text-primary w-full py-2 rounded-lg hover:bg-primary hover:text-secondary transition-colors duration-300"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {translations[locale].addToCart}
                  </button>
                </div>
              ))}
            </div>
            <nav className="mt-8 flex justify-center items-center space-x-4" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="btn bg-secondary text-primary px-4 py-2 rounded disabled:opacity-50"
                aria-label="Go to previous page"
              >
                {translations[locale].previous}
              </button>
              <span>{translations[locale].page} {currentPage} / {totalPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="btn bg-secondary text-primary px-4 py-2 rounded disabled:opacity-50"
                aria-label="Go to next page"
              >
                {translations[locale].next}
              </button>
            </nav>
          </>
        )}
        <div className="mt-12">
          <CartSummary cart={cart} />
        </div>
      </main>
      <BackToTop />
    </>
  )
}
