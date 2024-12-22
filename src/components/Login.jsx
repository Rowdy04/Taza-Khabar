import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Welcome Back!</h2>
        <p className="auth-subtitle">Login to your account and explore the latest news.</p>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;