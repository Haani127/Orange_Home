import React, { useState } from 'react';
import './Reg.css';
import {useNavigate} from "react-router-dom"; // We'll use a custom CSS file for styling
import navigate from "../Navigate/Navigate";
// import logoImage from './assets/log-orange-landing-page.avif'; // Your uploaded image

const Register = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


  };
const handleSignin=(event)=>{
   event.preventDefault();
    navigate("/Signin");
};
  function formData() {

  }

  const handleRegister = (e) => {
    e.preventDefault();
     if( email=="" || password=="" ||confirmPassword=="" ){
     alert("Input cannot be empty");
   }
   else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
    else if (formData.password === formData.confirmPassword) {
      navigate('/Home');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="register-container">
      <div className="sidebox">
        <div className="register-left">
          <div className="branding">
            <h1>Welcome </h1>
            <p>Register to get started with your account</p>
          </div>
        </div>

        <div className="register-right">
          <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit" className="register-button" onClick={handleRegister}>Register</button>
            <p className="signin-link">Already have an account? <a href="/signin" onClick={handleSignin}>Sign in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
