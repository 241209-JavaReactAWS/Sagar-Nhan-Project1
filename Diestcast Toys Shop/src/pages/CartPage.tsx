import './CartPage.css';
import React from 'react';
import { useCart } from '../components/HomePageComponent/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart) {
    return <p className="text-center">Your cart is empty.</p>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cart.cartItems.map((item) => (
          <li key={item.cartItemId} className="cart-item">
            <div className="details">
              <h5>{item.product.productName}</h5>
              <p>
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <button
              className="btn-danger"
              onClick={() => removeFromCart(item.product.productId)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">Total: ${cart.totalAmount.toFixed(2)}</div>
      <div className="cart-checkout">
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
