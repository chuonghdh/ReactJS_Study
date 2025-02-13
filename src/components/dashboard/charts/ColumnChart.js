import React from "react";
import { Chart } from "react-google-charts";
//import { salesData } from "../../../data/mockData";

const ColumnChart = ({ data }) => {
  const options = {
    title: "Monthly Sales Comparison",
    chartArea: { width: "90%" },
    hAxis: {
      title: "Month",
      minValue: 0,
    },
    vAxis: {
      title: "Sales",
    },
    legend: { position: "top" },
  };

  return (
    <div className="chart-container">
      <h3>Column Chart</h3>
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ColumnChart;
