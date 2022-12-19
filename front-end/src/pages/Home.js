import React from "react";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Card from "./../components/Card";
import Home1 from "./Home1";
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
        <Provider store={store}>
          <Home1></Home1>
        </Provider>
    );
  }
}
