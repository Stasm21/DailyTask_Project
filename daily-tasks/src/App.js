
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import Date from './components/DateTime/DateTime';
import React, { useState } from 'react';

const My_Tasks = [
  "Clean Car"
]

function App() {
  const [tasks, setTasks] = useState(My_Tasks);

  const addTaskHandler = task => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks]
    });
  }

  return (
    <div className="App">
      <h1>My Daily Tasks</h1>
      <Date />
      <TaskInput myTasks={tasks} onAddTask={addTaskHandler}/>
    </div>
  );
}

export default App;
