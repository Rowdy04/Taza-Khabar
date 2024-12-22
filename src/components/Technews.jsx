import React from "react";
import NewsCard from "./NewsCard";
import "./TechNews.css";

const TechNews = () => {
  const techNewsArticles = [
    {
      id: 1,
      title: "AI Breakthrough in 2024",
      description: "New AI model surpasses human-level understanding in languages.",
      image: "https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg",
    },
    {
      id: 2,
      title: "Quantum Computing Milestone",
      description: "Quantum computers achieve unprecedented speed.",
      image: "https://cdn.intuji.com/2023/09/Quantum-computing-featured-image.jpg",
    },
    {
      id: 3,
      title: "5G Expansion Worldwide",
      description: "5G networks now cover over 80% of the globe.",
      image: "https://t3.ftcdn.net/jpg/02/77/91/14/360_F_277911478_8UIc7EHEXX2EqG8zmDWVfriqwVUGd9Ac.jpg",
    },
  ];

  return (
    <div className="tech-news-container">
      <h1>Tech News</h1>
      <div className="news-grid">
        {techNewsArticles.map((article) => (
          <NewsCard
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TechNews;