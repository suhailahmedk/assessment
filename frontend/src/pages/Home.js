import React from "react";
import Card from "./../components/Card";
import Home2 from "./Home2";
import {LineChart} from "./../components/LineChart";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      flag:false,
      items: [
        {
          icon:"star-icon",
          value:"24242",
          title:"Customers"
        },
        {
          icon:"star-icon",
          value:"24242",
          title:"Orders"
        },
        {
          icon:"star-icon",
          value:"24242",
          title:"Delivery"
        },
        {
          icon:"star-icon",
          value:"42323",
          title:"Users"
        },
        {
          icon:"star-icon",
          value:"$ 42323",
          title:"Revenue"
        },
        {
          icon:"star-icon",
          value:"$ 42323",
          title:"Rating"
        },
        {
          icon:"star-icon",
          value:"$ 42323",
          title:"Average Revenue Per Customer"
        },
        {
          icon:"star-icon",
          value:"$ 42323",
          title:"Average Revenue Per User"
        },
      ],
    };
  }

  onItemClick = () => {
      this.setState({flag:true})
  };

  render() {
    const { flag,items, activePath } = this.state;
      return (
        flag? <Home2></Home2>:
      <div className="Container">
        <div className="home-page">
          <div className="top-row">
            <button className="filter-by">Filter By</button>

            <button className="btn-tqm" onClick={this.onItemClick}>TMQ</button>
          </div>
          <div className="chart-cards">
            <div className="statitics-data">
              {items.map((item) => (
                <Card item={item}></Card>
              ))}
            </div>
            <div className="custom-line-chart">
             <LineChart></LineChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
