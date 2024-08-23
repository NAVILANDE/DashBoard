import React from "react";
import "./styles/widget.css";
const Widget = ({ name, text, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
      </div>
      <img src={imageUrl} class="card-img-top" alt="..." />
    </div>
  );
};

export default Widget;
