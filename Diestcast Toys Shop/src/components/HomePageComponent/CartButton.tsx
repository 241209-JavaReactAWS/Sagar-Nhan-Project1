import React from 'react';

const CartButton: React.FC = () => (
    <button
        id="cart-btn"
        className="btn btn-warning text-dark position-relative"
    >
        <i className="fas fa-shopping-cart"></i>
        <span
            id="cart-count"
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
            0
        </span>
    </button>
);

export default CartButton;
