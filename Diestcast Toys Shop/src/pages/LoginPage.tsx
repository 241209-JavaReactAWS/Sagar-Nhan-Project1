import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App'; // Adjust the import path if needed

const LoginPage: React.FC = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    console.error('AuthContext is null');
    return null;
  }

  const { setUsername, setRole } = authContext;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/account/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameInput, passwordHash }),
      });

      if (response.ok) {
        const data = await response.json();

        // Extract username and role from response object
        const { username, roleName } = data;
        setUsername(username);
        setRole(roleName.roleName); // roleName.roleName contains the string like "ADMIN"

        // Navigate based on role
        if (roleName.roleName === 'ADMIN') {
          navigate('/admin-dashboard');
        } else {
          navigate('/');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h1>Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin} className="w-50 mt-3">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={passwordHash}
            onChange={(e) => setPasswordHash(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn w-100 btn-warning text-dark fw-bold me-3"
        >
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account?{' '}
        <Link to="/register" style={{ textDecoration: 'none', color: '#ffc107' }}>
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
