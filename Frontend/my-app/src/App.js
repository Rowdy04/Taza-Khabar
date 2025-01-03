import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import News from "./components/news";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
