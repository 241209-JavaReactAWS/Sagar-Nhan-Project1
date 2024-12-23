import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/HomePageComponent/NavBar/Header';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage'; // Import AdminDashboard component
import { CartProvider } from './components/HomePageComponent/CartContext';
import { Product as ProductType } from './types/productTypes';

// Define the AuthContext type
export interface AuthContextType {
  username: string;
  setUsername: (username: string) => void;
  role: 'unauthenticated' | 'USER' | 'ADMIN';
  setRole: (role: 'unauthenticated' | 'USER' | 'ADMIN') => void;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | null>(null);



const App: React.FC = () => {
  // Authentication state
  const [username, setUsername] = useState<string>('');
  const [role, setRole] = useState<'unauthenticated' | 'USER' | 'ADMIN'>('unauthenticated');

  return (
    // Provide the AuthContext
    <AuthContext.Provider value={{ username, setUsername, role, setRole }}>

      <CartProvider>
      <Router>
        <Header />
        <div className="container mt-1 pt-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin-dashboard" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>

             </AuthContext.Provider>
  );
};

export default App;
