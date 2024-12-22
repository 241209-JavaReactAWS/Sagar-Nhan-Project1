import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByProductId } from "../components/product/productApi";
import { Product } from "../types/productTypes";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      fetchProductByProductId(parseInt(productId))
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
          setError("Failed to load product details");
          setLoading(false);
        });
    }
  }, [productId]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error || !product) {
    return <p>{error || "Product not found!"}</p>;
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <img
        src={`http://localhost:8080/${product.imagePath}`}
        alt={product.productName}
        style={{ width: "300px", height: "300px" }}
      />
      
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Quantity: {product.availableQuantity}</p>
    </div>
  );
};

export default ProductDetailsPage;
