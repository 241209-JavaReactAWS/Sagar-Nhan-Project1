// src/components/Product.tsx
import React from 'react';
import { Product as ProductType } from '../../types/productTypes';
import './product.css'

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={`images/${product.name.toLowerCase()}.jpg`} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity Available: {product.quantity}</p>
    </div>
  );
};

export default Product;
