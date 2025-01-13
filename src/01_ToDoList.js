import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import './01_ToDoList.css'; // Optional CSS for styling

import csvFile from './data/todolist.csv'; // Import the CSV file

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [newTask, setNewTask] = useState({
    Task_ID: '',
    Task_Name: '',
    Task_Desc: '',
    Create_Date: '',
    Due_Date: '',
    Status: ''
  }); // New task for adding

  useEffect(() => {
    // Fetch CSV from the public directory
    Papa.parse(csvFile, {
      download: true,
      header: true,
      transformHeader: (header) => header.trim(),
      complete: (result) => {
        setTasks(result.data.filter((row) => Object.values(row).some((value) => value))); // Remove empty rows
      },
      error: (error) => {
        console.error('Error reading CSV file:', error);
      },
    });
  }, []);

  // Handle cell edit
  const handleEdit = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);
  };

  // Handle new task input change
  const handleNewTaskChange = (field, value) => {
    setNewTask({ ...newTask, [field]: value });
  };

  // Add a new row
  const handleAddRow = () => {
    if (newTask.Task_ID.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask({
        Task_ID: '',
        Task_Name: '',
        Task_Desc: '',
        Create_Date: '',
        Due_Date: '',
        Status: ''
      });
    } else {
      alert('Task ID is required.');
    }
  };

  // Delete a row
  const handleDeleteRow = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Save to CSV
  const handleSave = () => {
    const csv = Papa.unparse(tasks);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'todolist_updated.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Create Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              {Object.keys(task).map((key) => (
                <td key={key}>
                  <input
                    type="text"
                    value={task[key]}
                    onChange={(e) => handleEdit(index, key, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            {Object.keys(newTask).map((key) => (
              <td key={key}>
                <input
                  type="text"
                  value={newTask[key]}
                  onChange={(e) => handleNewTaskChange(key, e.target.value)}
                  placeholder={`Enter ${key}`}
                />
              </td>
            ))}
            <td>
              <button onClick={handleAddRow}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSave}>Save to CSV</button>
    </div>
  );
};

export default ToDoList;
