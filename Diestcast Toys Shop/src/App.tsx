// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Product as ProductType } from './types/productTypes';
import Header from './components/Home-page/Header';

const products: ProductType[] = [
  { id: 1, name: 'Car', description: 'Koeniggsegg', price: 1000.00, quantity: 9 },
  { id: 2, name: 'Truck', description: 'Ram', price: 900.00, quantity: 8 },
  { id: 3, name: 'Van', description: 'Kia', price: 800.00, quantity: 7 },
  { id: 4, name: 'Car2', description: 'Honda', price: 700.00, quantity: 6 },
  { id: 5, name: 'Truck2', description: 'Ford', price: 650.00, quantity: 5 },
  { id: 6, name: 'Van2', description: 'Toyota', price: 550.00, quantity: 4 },
  { id: 7, name: 'Car3', description: 'Acura', price: 500.00, quantity: 3 },
  { id: 8, name: 'Truck3', description: 'Hyundai', price: 400.00, quantity: 2 },
  { id: 9, name: 'Van3', description: 'Lexus', price: 300.00, quantity: 1 },
];

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
    <Header/>
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<ProductPage products={products} />} />
        <Route path="/product/:productId" element={<ProductDetailsPage products={products} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
