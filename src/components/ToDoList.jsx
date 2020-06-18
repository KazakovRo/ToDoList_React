import React from "react"
import ToDoItem from "./ToDoItem"

const ToDoList = ({ tasks, handleDeleteTask, handleEditTask, handleTogleDone }) => (
    <ul>
      {tasks.map(task => (
        <ToDoItem 
        key={task.id} 
        task={task} 
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        handleTogleDone={handleTogleDone}
        />
      ))}
    </ul>
)

export default ToDoList
