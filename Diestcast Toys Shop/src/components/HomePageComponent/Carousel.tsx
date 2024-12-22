import React from "react";
import { Product } from "../../types/productTypes"; // Import the Product type

const Carousel: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div id="newArrivalsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div
            key={product.productId}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`http://localhost:8080/${product.imagePath}`} // Use the correct image path
              className="d-block w-100"
              alt={product.productName}
              style={{ maxHeight: "500px", objectFit: "cover" }} // Adjust styling as needed
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{product.productName}</h5>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#newArrivalsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#newArrivalsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
