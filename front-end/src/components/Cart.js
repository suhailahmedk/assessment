import React from "react";

export default function Cart({item}) {
  return (
  <div className="custom-cart">
    <div className="cart-icon">
        <img src="#" className={item.icon}></img>
    </div>
    <div className="cart-title">
        {item.title}
    </div>
    <div className="cart-value">
        {item.value}
    </div>
    <div>
      <button className={item.color}>{item.btn}</button>
    </div>
  </div>
  );
}
