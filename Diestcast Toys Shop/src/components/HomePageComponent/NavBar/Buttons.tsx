import React from 'react';

const Buttons: React.FC = () => (
    <div className="d-flex">
        <a href="login1.html" className="btn btn-warning text-dark fw-bold me-3">
            Login/Register
        </a>
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
    </div>
);

export default Buttons;
