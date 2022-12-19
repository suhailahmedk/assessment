/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./../canvas/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function LineChart({ data }) {
  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "User Statics",
    },
    axisY: {
      title: "",
    },
    data: [
      {
        type: "area",
        xValueFormatString: "MM",
        yValueFormatString: "#,##0.## Million",
        dataPoints: data
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
