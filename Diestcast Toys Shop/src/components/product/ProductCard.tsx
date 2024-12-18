// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product as ProductType } from '../../types/productTypes';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`images/${product.name.toLowerCase()}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
