import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link, remove navigate
import './assets/login.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Use useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    
     console.log("handleLogin function is being executed");
    console.log(email);
    console.log(password);
    if (email === 'admin@gmail.com' && password === '1234') { // Password should be a string
      console.log("Signing Successfully");
      try {
        navigate('/admindashboard');
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Something Error...check it and fix");
    }
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h3 className="login-heading">Admin Login</h3>
        <div className="login-switch">
          <Link to="/userLogin" className="admin-login">
            User Login
          </Link>
          <Link to="/adminLogin" className="user-login">
            Admin Login
          </Link>
        </div>
        <form className='admin-form'>
          <input
            type="text"
            name="email"
            placeholder="Admin ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Admin Passcode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Login-button" type="submit" onClick={handleLogin}>
            Login
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
