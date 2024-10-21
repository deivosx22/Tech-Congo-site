import { useRouter } from 'next/router'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const products = [
  { id: 1, name: "Smartphone X", price: 699.99, image: "/images/smartphone.jpg", description: "The latest smartphone with advanced features and a powerful camera." },
  { id: 2, name: "Laptop Pro", price: 1299.99, image: "/images/laptop.jpg", description: "A high-performance laptop for professionals and power users." },
  { id: 3, name: "Wireless Earbuds", price: 149.99, image: "/images/earbuds.jpg", description: "Premium wireless earbuds with noise-cancellation technology." },
  { id: 4, name: "4K Smart TV", price: 799.99, image: "/images/tv.jpg", description: "A large 4K smart TV with vibrant colors and smart features." },
]

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const { addToCart } = useContext(CartContext)

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src={product.image} alt={product.name} width={500} height={500} className="object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <button 
            onClick={() => addToCart(product)} 
            className="btn bg-primary text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
