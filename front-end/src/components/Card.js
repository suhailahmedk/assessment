import React from "react";

export default function Card({item}) {
  return (
  <div className="custom-card">
    <div className="card-icon">
        <img src="#" className={item.icon}></img>
    </div>
    <div className="card-title">
        {item.title}
    </div>
    <div className="card-value">
        {item.value}
    </div>
  </div>
  );
}
