import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header fixed-top bg-dark py-3 shadow-sm">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="main-title">
        {/* Wrap the logo text in a Link to navigate to the homepage */}
        <Link to="/" className="text-decoration-none">
          <h2 className="m-0 text-white">
            <span className="text-light">Diecast</span>
            <span className="text-warning">Toys</span>
            <span className="bg-text text-muted">Shop</span>
          </h2>
        </Link>
      </div>
      <div className="d-flex">
        <Link to="/login" className="btn btn-warning text-dark fw-bold me-3">
          Login/Register
        </Link>
        <Link to="/admin" className="btn btn-secondary text-white fw-bold">
          Admin
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
