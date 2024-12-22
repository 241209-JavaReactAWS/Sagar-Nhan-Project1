import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/productTypes';


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  return (
    <div className="product-card">
      <img
         src={`http://localhost:8080/${product.imagePath}`} // Use the correct file path
         alt={product.productName}
         style={{ width: '200px', height: '200px' }}
      />
      <h3>{product.productName || 'Unnamed Product'}</h3>
      <p>${product.price?.toFixed(2) || '0.00'}</p>
      <Link to={`/product/${product.productId}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
