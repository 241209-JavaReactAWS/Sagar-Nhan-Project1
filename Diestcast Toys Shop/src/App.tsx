import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage'; // New Page
import RegisterPage from './pages/RegisterPage'; // New Page
import AdminPage from './pages/AdminPage'; // New Page
import { Product as ProductType } from './types/productTypes';
import Header from './components/HomePageComponent/NavBar/Header';
import HomePage from './pages/HomePage'; // Add HomePage

const products: ProductType[] = [
  { id: 1, name: 'Car', description: 'Koeniggsegg', price: 1000.0, quantity: 9 },
  { id: 2, name: 'Truck', description: 'Ram', price: 900.0, quantity: 8 },
  { id: 3, name: 'Van', description: 'Kia', price: 800.0, quantity: 7 },
  { id: 4, name: 'Car2', description: 'Honda', price: 700.0, quantity: 6 },
  { id: 5, name: 'Truck2', description: 'Ford', price: 650.0, quantity: 5 },
  { id: 6, name: 'Van2', description: 'Toyota', price: 550.0, quantity: 4 },
  { id: 7, name: 'Car3', description: 'Acura', price: 500.0, quantity: 3 },
  { id: 8, name: 'Truck3', description: 'Hyundai', price: 400.0, quantity: 2 },
  { id: 9, name: 'Van3', description: 'Lexus', price: 300.0, quantity: 1 },
];

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <br />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage Route */}
          <Route path="/products" element={<ProductPage products={products} />} /> {/* Product Page Route */}
          <Route path="/product/:productId" element={<ProductDetailsPage products={products} />} />
          <Route path="/login" element={<LoginPage />} /> {/* Login Page Route */}
          <Route path="/register" element={<RegisterPage />} /> {/* Register Page Route */}
          <Route path="/admin" element={<AdminPage />} /> {/* Admin Page Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
