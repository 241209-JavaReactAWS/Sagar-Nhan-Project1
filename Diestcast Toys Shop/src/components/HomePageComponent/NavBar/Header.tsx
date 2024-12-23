import React from 'react';
import { useCart } from '../../../components/HomePageComponent/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../../../App';

const Header: React.FC = () => {
  const { totalItems } = useCart(); // Fetch cart item count from CartContext
  const authContext = useContext(AuthContext); // Access AuthContext
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Error: AuthContext not found.</div>;
  }

  const { username, role, setUsername, setRole } = authContext;

  const handleLogout = () => {
    setUsername(''); // Clear the username
    setRole('unauthenticated'); // Reset the role to unauthenticated
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="header fixed-top bg-dark py-2 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Main Title */}
        <Link to="/" className="text-decoration-none">
          <h2 className="m-0 text-white">
            <span className="text-light">Diecast</span>
            <span className="text-warning">Toys</span>
          </h2>
        </Link>

        {/* Navigation Buttons */}
        <div className="d-flex align-items-center">
          <Link to="/products" className="btn btn-light text-dark fw-bold me-3">
            Products
          </Link>
          {role === 'ADMIN' && (
            <Link
              to="/admin-dashboard"
              className="btn btn-warning text-dark fw-bold me-3"
            >
              Admin Dashboard
            </Link>
          )}
          {username ? (
            <>
              <span
                className="text-white me-3"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                }}
              >
                Welcome, <span className="text-warning">{username}</span> (
                <span className="text-white">{role}</span>)
              </span>

              <button
                onClick={handleLogout}
                className="btn btn-danger text-white fw-bold me-3"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-warning text-dark fw-bold me-3">
              Login/Register
            </Link>
          )}
          {/* Cart Button */}
          <Link
            to="/cart"
            className="btn btn-warning text-dark position-relative"
          >
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
