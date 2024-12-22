import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, description, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;