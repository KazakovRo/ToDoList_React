import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import ToDoList from "./components/ToDoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const [isDone, setDone] = useState(false)

  const handleAddTask = task => {
    if (task.length) {
      const newTask = { id: uuid(), done: false, task };

      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const handleDeleteTask = id => 
    setTasks(tasks.filter(task => task.id !== id ))
  
  const handleEditTask = (id, newTask) => 
    setTasks(tasks.map(task => id === task.id ? {...task, task: newTask} : task ))

    const handleTogleDone = id => 
      setDone(tasks.map(task => id === task.id ? {...task, done: !isDone} : task))
    

  return (
    <div className="wrap">
      
      <div className = "header-app">
        <h1>React To do list</h1>

        <div className="input-data">

        <input
        type="text" 
        value={inputText} 
        placeholder="Your task here ..." 
        onChange={({target: { value } }) => setInputText(value)}
        // onKeyPress={handleAddTask()}
        />

        <button 
        className="add-task" 
        onClick={() => handleAddTask(inputText)}>
          Add task
        </button>

        </div>
      </div>

      <div className = "body-app">
        <ToDoList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask} 
        handleEditTask={handleEditTask}
        handleTogleDone={handleTogleDone}
        />
      </div>
    </div>
  );
};

export default App;
