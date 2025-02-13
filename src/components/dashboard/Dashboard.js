import React, { useState } from "react";
import ChartContainer from "./ChartContainer";
import FilterControls from "./FilterControls";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const [filteredItems, setFilteredItems] = useState({
    item1: true,
    item2: true,
    item3: true,
  });

  const handleFilterChange = (updatedItems) => {
    setFilteredItems(updatedItems);
  };

  return (
    <div className="dashboard">
      {/* <h2>Sales Dashboard</h2> */}
      <div className="dashboard-layout">
        {/* Filter Controls */}
        <div className="filter-section">
          <FilterControls onFilterChange={handleFilterChange} />
        </div>
        {/* Chart Container */}
        <div className="chart-section">
          <ChartContainer filteredItems={filteredItems} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
