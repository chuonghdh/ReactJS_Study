import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import './01_ToDoList.css'; // Optional CSS for styling

import csvFile from './data/todolist.csv'; // Import the CSV file

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch CSV from the public directory
    Papa.parse(csvFile, {
      download: true,
      header: true,
      complete: (result) => {
        console.log("CSV Parsed Result:", result);
        setTasks(result.data);
      },
      error: (error) => {
        console.error('Error reading CSV file:', error);
      },
    });
  }, []);

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Create Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.Task_ID}</td>
              <td>{task.Task_Name}</td>
              <td>{task.Task_Desc}</td>
              <td>{task.Create_Date}</td>
              <td>{task.Due_Date}</td>
              <td>{task.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
