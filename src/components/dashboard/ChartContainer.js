import React from "react";
import LineChart from "./charts/LineChart";
import ColumnChart from "./charts/ColumnChart";
import { salesData } from "../../data/mockData";
import "./styles/ChartContainer.css";

const ChartContainer = ({ filteredItems }) => {
  const transformData = () => {
    const selectedItems = Object.keys(filteredItems).filter(
      (item) => filteredItems[item]
    );

    // Rebuild the data array, keeping the headers and filtering the values
    const chartData = [
      salesData[0].slice(0, 1).concat(selectedItems.map((item) => `Item ${item.slice(-1)}`)), // Headers: "Month" + selected items
      ...salesData.slice(1).map((row) => [
        row[0], // Month
        ...selectedItems.map((key) => {
          const index = salesData[0].indexOf(`Item ${key.slice(-1)}`);
          return row[index];
        }),
      ]),
    ];

    return chartData;
  };

  return (
    <div className="charts">
      <LineChart data={transformData()} />
      <ColumnChart data={transformData()} />
    </div>
  );
};

export default ChartContainer;
