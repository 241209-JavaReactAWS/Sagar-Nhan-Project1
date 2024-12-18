import React from 'react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  // Example state for an empty cart
  const cartItems = [];

  return (
    <div className="container mt-5">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          Your cart is empty. <Link to="/products" className="alert-link">Go back to shop</Link> and add some products!
        </div>
      ) : (
        <div>
          {/* Cart items would go here */}
        </div>
      )}
    </div>
  );
};

export default CartPage;
