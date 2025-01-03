import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post("http://localhost:3000/api/Login", { username, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Login Successful") {
          navigate("/news");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h1 className="card-title text-center mb-4">Welcome to Taza Khabar</h1>
          <div className="card shadow-lg p-4">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <p>Don't have an account? <button className="btn btn-link" onClick={() => navigate("/register")}>Register</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;