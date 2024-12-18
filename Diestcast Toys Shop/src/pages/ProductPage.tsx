// src/containers/ProductPage.tsx
import React from 'react';
import ProductCard from '../components/product/ProductCard';
import { Product as ProductType} from '../types/productTypes';

interface ProductPageProps {
  products: ProductType[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
