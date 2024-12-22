import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import WorldNews from "./components/WorldNews";
import TechNews from "./components/TechNews";
import SportsNews from "./components/SportsNews";
import "./App.css";

const App = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Breaking News: React Hits 18.0",
      description: "React 18 introduces concurrent rendering and more!",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "JavaScript Framework Wars",
      description: "Vue, React, and Angular battle for supremacy.",
      image: "https://via.placeholder.com/300",
    },
    // Add more articles as needed
  ];

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/news"
                    element={
                      <main className="news-container">
                        {newsArticles.map((article) => (
                          <NewsCard
                            key={article.id}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                          />
                        ))}
                      </main>
                    }
                  />
                  <Route path="/world-news" element={<WorldNews />} />
                  <Route path="/tech" element={<TechNews />} />
                  <Route path="/sports" element={<SportsNews />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;