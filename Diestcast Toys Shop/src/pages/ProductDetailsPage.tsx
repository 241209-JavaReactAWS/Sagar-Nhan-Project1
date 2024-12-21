// src/pages/ProductDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/product/Product';
import { Product as ProductType } from '../types/productTypes';

interface ProductDetailsPageProps {
  products: ProductType[];
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(p => p.productId === parseInt(productId));
      setProduct(foundProduct || null);
    }
  }, [productId, products]);

  return (
    <div className="product-details-page">
      {product ? <Product product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetailsPage;
