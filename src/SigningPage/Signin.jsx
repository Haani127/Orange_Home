import React, { useState } from 'react';
import './Signin.css';
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const handleLogin = (event) => {
    event.preventDefault();
    if(email=="" || password==""){
        alert("Input cannot be empty");
    }
    else
    navigate("/Home");
  };

  const handleRegister = () => {
    navigate("/Reg");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="signin-container">
        <div className="sidebox">
      <div className="signin-left">
        <div className="branding">
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your dashboard</p>
        </div>
      </div>

      <div className="signin-right">
        <form onSubmit={handleSubmit} className="signin-form">
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signin-button" onClick={handleLogin}>Sign In</button>
          <p className="forgot-password"><a href="/forgot">Forgot password?</a></p>
          <p className="signup-link">Don't have an account? <a href="/signup" onClick={handleRegister}>Sign up</a></p>
        </form>
      </div>
        </div>
    </div>
  );
};

export default SignIn;
