import React from "react";
import "./styles/home.css";

const categories = ["CSPM", "CWPP", "Images", "Tickets"];

const Home = () => {
  return (
    <div className="container">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h3>{category}</h3>
          <div className="grid">
            {Array.from({ length: 4 }).map((_, widgetIndex) => (
              <div key={widgetIndex} className="card add-widget">
                <div className="icon-container">
                  <div className="icon">+</div>
                </div>
                <div className="text">Add Widget</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
