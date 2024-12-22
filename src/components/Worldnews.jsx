import React from "react";
import NewsCard from "./NewsCard";
import "./WorldNews.css";

const WorldNews = () => {
  const worldNewsArticles = [
    {
      id: 1,
      title: "Global Economic Summit 2024",
      description: "World leaders gather to discuss economic policies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_VSEgJ8RFRRK_CjftxxXVXPQnSQ4UGfP5g&s",
    },
    {
      id: 2,
      title: "Climate Change Conference",
      description: "Nations pledge to cut down carbon emissions.",
      image: "https://media.istockphoto.com/id/179057833/photo/view-of-contrasting-landscape.jpg?s=612x612&w=0&k=20&c=yvpj4kNTgc8ysReGfBopqoBfj4p5RlD0ugz74EV6lhU=",
    },
    {
      id: 3,
      title: "Breakthrough in Renewable Energy",
      description: "Scientists achieve major milestone in solar power.",
      image: "https://static.vecteezy.com/system/resources/previews/023/488/614/non_2x/renewable-energy-background-with-green-energy-as-wind-turbines-and-solar-panels-green-energy-concept-energy-sources-sustainable-ecology-elements-generative-ai-photo.jpg",
    },
  ];

  return (
    <div className="world-news-container">
      <h1>World News</h1>
      <div className="news-grid">
        {worldNewsArticles.map((article) => (
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

export default WorldNews;