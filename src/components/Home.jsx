import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to NewsHub</h1>
        <p>Your daily dose of the latest and greatest news from around the world.</p>
        <a href="/news" className="explore-button">Explore News</a>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3>Stay Informed</h3>
          <p>Get real-time updates on global events and trending topics.</p>
        </div>
        <div className="feature">
          <h3>Personalized Content</h3>
          <p>Customize your feed to see news that matters to you.</p>
        </div>
        <div className="feature">
          <h3>Easy Access</h3>
          <p>Available on all devices, anytime, anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;