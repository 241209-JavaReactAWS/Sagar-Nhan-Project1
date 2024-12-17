import React from 'react';


const Header: React.FC = () => {
    return (
        <header className="header fixed-top bg-dark py-3 shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo Section */}
                <div className="main-title">
                    <h2 className="m-0 text-white">
                        <span id="diecast" className="text-light">Diecast</span>
                        <span id="s" className="text-warning">Toys</span>
                        <span className="bg-text text-muted">Shop</span>
                    </h2>
                </div>

                {/* Search Bar Section */}
                <div className="d-flex flex-grow-1 mx-3">
                    <input
                        type="text"
                        id="search-bar"
                        className="form-control me-2"
                        placeholder="Search for your items..."
                    />
                </div>

                {/* Buttons Section */}
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
            </div>
        </header>
    );
};

export default Header;
