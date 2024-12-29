import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import News from "./components/news";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <News />
    </>
  );
}

export default App;