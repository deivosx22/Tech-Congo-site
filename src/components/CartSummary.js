import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const translations = {
  en: {
    currentCart: "Current Cart",
    empty: "Your cart is empty",
    total: "Total",
    item: "item",
    items: "items"
  },
  fr: {
    currentCart: "Panier actuel",
    empty: "Votre panier est vide",
    total: "Total",
    item: "article",
    items: "articles"
  }
};

const CartSummary = ({ cart }) => {
  const { locale } = useContext(LanguageContext);

  if (cart.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">{translations[locale].currentCart}</h2>
        <p>{translations[locale].empty}</p>
      </div>
    );
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-primary">{translations[locale].currentCart}</h2>
      <ul className="mb-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center font-bold">
        <span>
          {translations[locale].total} ({totalItems} {totalItems === 1 ? translations[locale].item : translations[locale].items})
        </span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
