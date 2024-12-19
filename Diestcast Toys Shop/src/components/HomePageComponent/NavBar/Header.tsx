import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../App';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Error: AuthContext not found.</div>;
  }

  const { username, role, setUsername, setRole } = authContext;

  const handleLogout = () => {
    setUsername('');
    setRole('unauthenticated');
    navigate('/login');
  };

  return (
    <header className="header fixed-top bg-dark py-2 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="main-title">
          <Link to="/" className="text-decoration-none">
            <h2 className="m-0 text-white">
              <span className="text-light">Diecast</span>
              <span className="text-warning">Toys</span>
              <span className="bg-text text-muted">Shop</span>
            </h2>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          {/* Products Button */}
          <Link to="/products" className="btn btn-light text-dark fw-bold me-3">
            Products
          </Link>
          {username ? (
            <>
              <span className="text-white me-3">
                Welcome, {username} ({role})
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-warning text-dark fw-bold me-3"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-warning text-dark fw-bold me-3">
              Login/Register
            </Link>
          )}
          <Link
            to="/cart"
            className="btn btn-outline-light text-white d-flex align-items-center justify-content-center p-2"
          >
            <i className="fas fa-shopping-cart fs-4"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;