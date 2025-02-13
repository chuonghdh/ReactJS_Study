import React, { useState } from "react";

const FilterControls = ({ onFilterChange }) => {
  const [selectedItems, setSelectedItems] = useState({
    item1: true,
    item2: true,
    item3: true,
  });

  // Handle item selection change
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedItems((prev) => {
      const updatedItems = { ...prev, [name]: checked };
      onFilterChange(updatedItems); // Notify parent about the filter change
      return updatedItems;
    });
  };

  return (
    <div className="filter-controls">
      <h4>Select Items to Display</h4>
      <label>
        <input
          type="checkbox"
          name="item1"
          checked={selectedItems.item1}
          onChange={handleChange}
        />
        Group 
      </label> <br/>
      <label>
        <input
          type="checkbox"
          name="item2"
          checked={selectedItems.item2}
          onChange={handleChange}
        />
        Group 1
      </label> <br/>
      <label>
        <input
          type="checkbox"
          name="item3"
          checked={selectedItems.item3}
          onChange={handleChange}
        />
        Group 2
      </label> <br/>
    </div>
  );
};

export default FilterControls;
