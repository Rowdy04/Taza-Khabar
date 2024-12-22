import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Create Your Account</h2>
        <p className="auth-subtitle">Join us and stay updated with the latest news.</p>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;