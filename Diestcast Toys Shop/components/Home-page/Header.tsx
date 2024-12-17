import React from 'react';

const Header: React.FC=() => {
    return (

        <header className="header d-flex justify-content-between align-items-center p-3">
        <div className="main-title">
            
            <h2><span id="diecast">Diecast</span><span id="s">Toys</span>
                <span  className="bg-text">Shop</span>
            </h2>

        </div>
        <div className="search-bar flex-grow-1 mx-3">
            <input type="text" id="search-bar" className="form-control" placeholder="Search for your items..."/>
        </div>
        <div className="buttons">
            <a href="login1.html" className="btn">Login/Register</a>
            <button id="cart-btn" className="btn position-relative">
                <i className="fas fa-shopping-cart"></i>
                <span id="cart-count" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                </span>
            </button>
        </div>

    </header>
   
    );
};

export default Header;