import React from 'react';
import { useCart } from '../HomePageComponent/CartContext';
import { Product } from '../../types/productTypes';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      await addToCart(product.productId, 1); // Add 1 quantity by default
      alert(`${product.productName} added to cart!`);
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  return (
    <div className="product-card">
      <img src={`http://localhost:8080/${product.imagePath}`} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} className="btn btn-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
