import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, handleDeleteTask, handleEditTask, handleTogleDone }) => {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem 
        key={task.id} 
        task={task} 
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        // tasks={tasks}
        handleTogleDone={handleTogleDone}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
