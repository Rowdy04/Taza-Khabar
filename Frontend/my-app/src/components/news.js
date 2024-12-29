import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/news")
      .then((res) => {
        // handle success
        console.log(res.data);
        setNews(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row text-center">
        {news.map((val, index) => (
          <div className="col-md-4 my-3" key={index}>
            <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "15px" }}>
              <img src={val.Image} className="card-img-top" alt="News" style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.content}</p>
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
