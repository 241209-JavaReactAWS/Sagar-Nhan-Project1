import React from 'react';
import Header from '../components/HomePageComponent/NavBar/Header';
import Carousel from '../components/HomePageComponent/Carousel';

// Sample products for New Arrivals
const newArrivals = [
  { id: 1, name: 'Car 1', description: 'Diecast model of a classic car', price: 50.00, imageUrl: '/assets/car1.jpg' },
  { id: 2, name: 'Car 2', description: 'Diecast model of a modern car', price: 60.00, imageUrl: '/assets/car2.jpg' },
  { id: 3, name: 'Car 3', description: 'Diecast model of a race car', price: 75.00, imageUrl: '/assets/car3.jpg' },
];

const HomePage: React.FC = () => (
  <>
    <Header />
    <main className="container mt-4 pt-5">
      {/* Container for Carousel and Description with rounded borders */}
      <div className="container" style={{ backgroundColor: 'rgb(33, 37, 41)', padding: '30px', borderRadius: '15px' }}>
        <div className="row">
          {/* Left Column - Carousel */}
          <div className="col-md-6">
            <Carousel />
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
                <a href="/products" className="btn btn-" style={{ backgroundColor: '#ffc107', color: '#000', borderColor:'#ffc107' }}>Shop Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="mt-5">
        <h2 className="text-center">New Arrivals</h2>
        <p className="text-center text-muted">Explore the latest additions to our collection.</p>
        <div id="products" className="d-flex overflow-auto gap-3">
          {newArrivals.map(product => (
            <div key={product.id} className="card" style={{ width: '18rem' }}>
              <img 
                src={product.imageUrl} 
                className="card-img-top" 
                alt={product.name} 
                style={{ borderRadius: '15px', padding: '5px' }} // Added border-radius here
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    {/* Footer Section */}
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

export default HomePage;
