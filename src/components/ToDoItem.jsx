import React, { useState } from "react";

const ToDoItem = ({ task: { id, done, task }, handleDeleteTask, handleEditTask, handleTogleDone }) => {
  
  const [taskText, setTaskText] = useState(task);
  const [isEdit, setEdit] = useState(false)

  // const [isDone, setDone] = useState(done)

  const handleSaveTask = id => {
    handleEditTask(id, taskText)
    setEdit(false)
  }

  // const handleTogleDone = id => {
  //   setDone(tasks.map(task => id === task.id ? {...task, done: !isDone} : task))
  // }

  return (
    <li className="task-item">

      <input
        type="text"
        className="to-do-task"
        value={taskText}
        onChange={({ target: { value } }) => setTaskText(value)}
        readOnly
        onClick={() => handleTogleDone(id) }
      />

      {isEdit ?
        <button className="save-task" onClick={() => handleSaveTask(id)}>
        Save
      </button>
      :
        <button className="edit-task" onClick={() => setEdit(true)}>
        Edit
      </button>
      }

      <button className="delete-task" onClick={() => handleDeleteTask(id)}>
        X
        {/* &times; */}
      </button>
    </li>
  );
};

export default ToDoItem;
