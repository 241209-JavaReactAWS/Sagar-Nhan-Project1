import React from 'react';
import { useCart } from './../HomePageComponent/CartContext';

const AddToCartButton: React.FC<{ productId: number }> = ({ productId }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      await addToCart(productId, 1); // Add 1 item to the cart
      alert('Item added to cart!');
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  return (
    <button onClick={handleAddToCart} className="btn btn-primary">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
