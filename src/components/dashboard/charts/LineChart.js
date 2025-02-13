import React from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ data }) => {
  const options = {
    title: "Sales Over Time",
    chartArea: { width: "90%" },
    curveType: "function",
    legend: { position: "top" },
    hAxis: {
      title: "Month",
    },
    vAxis: {
      title: "Sales",
    },
  };

  return (
    <div className="chart-container">
      <h3>Line Chart</h3>
      <Chart
        chartType="LineChart"
        data={data}//{ hardcodedData}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default LineChart;