import React, { useState } from 'react';
import axios from 'axios';  // Use Axios for HTTP requests

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    
    // Prepare the request body
    const accountData = { username, passwordHash: password };  // Send hashed password if needed

    try {
      const response = await axios.post('http://localhost:8080/account/register', accountData);
      setSuccessMessage('Registration successful! Please log in.');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setPhoneNumber('');
      console.log('Registered User:', response.data); // Log the registered user details
    } catch (err: any) {
      setError(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="w-50 mt-3">
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="abc@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            className="form-control"
            placeholder="1234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>} {/* Success message */}
        <button
          type="submit"
          className="btn w-100 btn-warning text-dark fw-bold me-3"
          style={{ backgroundColor: '#ffc107', color: '#000' }}
        >
          Register
        </button>
        <p className="mt-3 text-center">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
