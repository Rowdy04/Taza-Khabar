import React from "react";
import NewsCard from "./NewsCard";
import "./SportsNews.css";

const SportsNews = () => {
  const sportsNewsArticles = [
    {
      id: 1,
      title: "Olympics 2024 Highlights",
      description: "Top athletes compete for gold in Paris.",
      image: "https://cdn.vectorstock.com/i/1000v/28/87/olympic-rings-games-logo-editorial-vector-35012887.avif",
    },
    {
      id: 2,
      title: "Cricket World Cup",
      description: "Historic matches and unforgettable moments.",
      image: "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=",
    },
    {
      id: 3,
      title: "Football World Cup",
      description: "An epic showdown between the league's best teams.",
      image: "https://img.goodfon.com/wallpaper/big/e/fe/fifa-world-cup-football.webp",
    },
  ];

  return (
    <div className="sports-news-container">
      <h1>Sports News</h1>
      <div className="news-grid">
        {sportsNewsArticles.map((article) => (
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

export default SportsNews;