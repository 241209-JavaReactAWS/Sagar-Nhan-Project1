import React, { useEffect, useState } from 'react';
import Header from '../components/HomePageComponent/NavBar/Header';
import Carousel from '../components/HomePageComponent/Carousel';
import { fetchAllProducts } from '../components/product/productApi'; // Import API function
import { Product } from '../types/productTypes'; // Import Product type

const HomePage: React.FC = () => {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setNewArrivals(data.slice(0, 6)); // Show only the first 6 products
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load new arrivals.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="container mt-4 pt-5">
        <div className="container" style={{ backgroundColor: "rgb(33, 37, 41)", padding: "30px", borderRadius: "15px" }}>
          <div className="row">
            {/* Left Column - Carousel */}
            <div className="col-md-6">
              {loading && <p>Loading new arrivals...</p>}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && <Carousel products={newArrivals} />}
            </div>

            {/* Right Column - Description */}
            <div className="col-md-6 text-white">
              <div className="d-flex flex-column justify-content-center h-100">
                <h2 className="text-light fw-bold">Explore Our Diecast Car Collection</h2>
                <p className="mt-3">
                  Welcome to Diecast Toys! We offer a wide selection of diecast car models
                  from various categories, including classic, vintage, and modern vehicles.
                  Our cars are crafted with intricate details and precision, making them perfect
                  for collectors and enthusiasts. Browse our collection and find the perfect addition
                  to your collection today!
                </p>
                <p>
                  <strong>Features:</strong> High-quality materials, realistic designs, and great attention to detail.
                </p>
                <p className="mt-4">
                  <a href="/products" className="btn btn-" style={{ backgroundColor: "#ffc107", color: "#000", borderColor: "#ffc107" }}>
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals Section */}
        <section className="mt-5">
          <h2 className="text-center">New Arrivals</h2>
          <p className="text-center text-muted">Explore the latest additions to our collection.</p>
          {loading && <p>Loading new arrivals...</p>}
          {error && <p className="text-center text-danger">{error}</p>}
          <div id="products" className="d-flex overflow-auto gap-3">
            {!loading &&
              !error &&
              newArrivals.map((product) => (
                <div key={product.productId} className="card" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:8080/${product.imagePath}`}
                    className="card-img-top"
                    alt={product.productName}
                    style={{ borderRadius: "15px", padding: "5px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <a href={`/product/${product.productId}`} className="btn btn-primary">View Details</a>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Diecast Toys Shop. All Rights Reserved.</p>
        <p>
          Follow us on: 
          <a href="#" className="text-warning ms-2">Facebook</a> | 
          <a href="#" className="text-warning ms-2">Instagram</a> | 
          <a href="#" className="text-warning ms-2">Twitter</a>
        </p>
      </footer>
    </>
  );
};

export default HomePage;
