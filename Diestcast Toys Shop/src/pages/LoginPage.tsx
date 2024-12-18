import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // To handle the link to RegisterPage

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="w-50 mt-3">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn w-100 btn-warning text-dark fw-bold me-3"
          style={{ backgroundColor: '#ffc107', color: '#000' }}
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
