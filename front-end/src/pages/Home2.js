import React from "react";
import Cart from "./../components/Cart";
export default function Home2({ item }) {
  const items=[
    {
      icon:"star-icon",
      value:"90%",
      title:"Order Acceptance",
      btn:"Phase 1 Goal",
      color:"cart-btn btn-yellow"
    },
    {
      icon:"star-icon",
      value:"80%",
      title:"Reaching Vendor",
      btn:"Phase 1 Goal",
      color:"cart-btn btn-green"
    },
    {
      icon:"star-icon",
      value:"24%",
      title:"Delivery Order",
      btn:"Phase 1 Goal",
      color:"cart-btn btn-red"
    },
    {
      icon:"star-icon",
      value:"30%",
      title:"Clearing Payments",
      btn:"Phase 1 Goal",
      color:"cart-btn brn-half-yellow"
    },
    {
      icon:"star-icon",
      value:"79%",
      title:"Total Quality Score",
      btn:"Phase 1 Goal",
      color:"cart-btn btn-yellow"
    },
    
  ]
  return (
    <div className="Container">
      <div className="home-page">
        <div className="top-row-btn">
          <div>
          <button className="btn-quality">
            Quantity
          </button>
          <button className="btn-performance">
            Performance
          </button>
          </div>
        </div>
        <div>
          <label className="company-insights">Company Insights</label>
        </div>
        <div className="chart-cards">
          <div className="statitics-data-2">
            {
              items.map((item) => (
                <Cart item={item}></Cart>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
