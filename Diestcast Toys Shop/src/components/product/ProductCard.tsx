import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/productTypes';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageName = product.productName
    ? product.productName.toLowerCase().replace(/\s+/g, '-')
    : 'default';

  return (
    <div className="product-card">
      <img
        // src={`images/${imageName}.jpg`}
        alt={product.productName || 'Default Product'}
        onError={(e) => (e.currentTarget.src = 'images/default.jpg')} // Fallback image
      />
      <h3>{product.productName || 'Unnamed Product'}</h3>
      <p>${product.price?.toFixed(2) || '0.00'}</p>
      <Link to={`/product/${product.productId}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
