import "../components/product/product.css";

import React, { useEffect, useState } from 'react';

import { Product } from '../types/productTypes'; // Import updated interface
import { fetchAllProducts } from '../components/product/productApi';
import AddToCartButton from '../components/HomePageComponent/CartButton';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchAllProducts();
        console.log(productsData); // Log products for debugging
        setProducts(productsData);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="product-container">
      {products.map((product) => (
  <div key={product.productId} className="card" style={{ width: '18rem' }}>
    <img
      src={`http://localhost:8080/${product.imagePath}`}
      className="card-img-top"
      alt={product.productName}
      style={{ borderRadius: '15px', padding: '5px' }}
    />
    <div className="card-body">
      <h5 className="card-title">{product.productName}</h5>
      <p className="card-text">${product.price.toFixed(2)}</p>
      <AddToCartButton productId={product.productId} />
    </div>
  </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
