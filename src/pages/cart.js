import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { LanguageContext } from '../context/LanguageContext'
import Image from 'next/image'

const translations = {
  en: {
    yourCart: "Your Cart",
    cartEmpty: "Your cart is empty.",
    remove: "Remove",
    total: "Total",
    proceedToCheckout: "Proceed to Checkout"
  },
  fr: {
    yourCart: "Votre Panier",
    cartEmpty: "Votre panier est vide.",
    remove: "Supprimer",
    total: "Total",
    proceedToCheckout: "Procéder au paiement"
  }
}

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)
  const { locale } = useContext(LanguageContext)

  useEffect(() => {
    console.log('Cart in cart page:', JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{translations[locale].yourCart}</h1>
      {cart.length === 0 ? (
        <p>{translations[locale].cartEmpty}</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <div className="relative w-24 h-24 mr-4">
                <Image src={item.image} alt={item.name} fill style={{objectFit: "cover"}} sizes="96px" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="btn bg-gray-200 text-gray-800 px-2 py-1"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="btn bg-gray-200 text-gray-800 px-2 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn bg-red-500 text-white"
              >
                {translations[locale].remove}
              </button>
            </div>
          ))}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
              {translations[locale].total}: ${total.toFixed(2)}
            </h2>
            <button className="btn mt-4">{translations[locale].proceedToCheckout}</button>
          </div>
        </>
      )}
    </div>
  )
}
