import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from '../redux/store';
import Card from "./../components/Card";
import Home2 from "./Home2";

import LineChart from "./../components/LineChart";
import { getHomeStatics,getYearlyStatics } from "../redux/slices/statics";

export default function Home() {
  const dispatch = useDispatch();
  const { homestatics,yearlystatics } = useSelector((state) => state.statics);
const [flag,setFlag] = useState(false);
const onItemClick = () => {
  setFlag(true)
};
useEffect(() => {
 
  dispatch(getHomeStatics());
  dispatch(getYearlyStatics());
}, [dispatch]);

  return (
      flag? <Home2></Home2>:
    <div className="Container">
      <div className="home-page">
        <div className="top-row">
          <button className="filter-by">Filter By</button>

          <button className="btn-tqm" onClick={onItemClick}>TMQ</button>
        </div>
        <div className="chart-cards">
          <div className="statitics-data">
            {homestatics.map((item) => (
              <Card item={item}></Card>
            ))}
          </div>
          <div className="custom-line-chart">
           <LineChart data={yearlystatics}></LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}
