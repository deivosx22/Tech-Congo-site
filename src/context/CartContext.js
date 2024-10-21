import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Reducer: Adding to cart', action.payload);
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      console.log('Reducer: Removing from cart', action.payload);
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      console.log('Reducer: Updating quantity', action.payload);
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      console.log('Initial cart from localStorage:', savedCart);
      dispatch({ type: 'INIT_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    console.log('Saving cart to localStorage:', JSON.stringify(cart));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log('CartContext: Adding to cart', product);
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    console.log('CartContext: Removing from cart', productId);
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    console.log('CartContext: Updating quantity', productId, quantity);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
