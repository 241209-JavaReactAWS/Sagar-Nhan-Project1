import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCart, addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart } from '../../components/axios-fetch/cartAPI';

interface CartItem {
  cartItemId: number;
  product: {
    productId: number;
    productName: string;
    price: number;
  };
  quantity: number;
  price: number;
}

interface Cart {
  cartItems: CartItem[];
  totalAmount: number;
}

interface CartContextType {
  cart: Cart | null;
  totalItems: number;
  addToCart: (productId: number, quantity: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const userId = 1; // Replace with dynamic userId if applicable
        const cartData = await fetchCart(userId);
        setCart(cartData);
        updateTotalItems(cartData);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };

    loadCart();
  }, []);

  const updateTotalItems = (cartData: Cart | null) => {
    const total = cartData?.cartItems.reduce((sum, item) => sum + item.quantity, 0) || 0;
    setTotalItems(total);
  };

  const addToCart = async (productId: number, quantity: number) => {
    try {
      const updatedCart = await apiAddToCart(productId, quantity, 1); // UserId hardcoded for simplicity
      setCart(updatedCart);
      updateTotalItems(updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      const userId = 1; // Replace with dynamic userId if applicable
      const updatedCart = await apiRemoveFromCart(productId, userId);
      setCart(updatedCart);
      updateTotalItems(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
