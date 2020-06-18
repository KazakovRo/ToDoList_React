import React, { useState, useRef } from "react"

const ToDoItem = ({ task: { id, done, task }, handleDeleteTask, handleEditTask, handleTogleDone }) => {
  
  const [taskText, setTaskText] = useState(task)
  const [isEdit, setEdit] = useState(false)

  const inputElem = useRef()

  const handleEditAction = () => {
    setEdit(true) 
    inputElem.current.focus()
  }

  const handleSaveTask = id => {
    handleEditTask(id, taskText)
    setEdit(false)
  }

  return (
    <li className="task-item">

      <input
        type="text"
        className={`to-do-task ${done ? 'to-do-task_done' : '' }`}
        value={taskText}
        onChange={({ target: { value } }) => value ? setTaskText(value) : handleDeleteTask(id)}
        readOnly={isEdit ? false : true}
        onClick={isEdit ? null : () => handleTogleDone(id)}
        ref={inputElem}
      />

      {isEdit ?
        <button className={`save-task ${done ? 'save-task_done' : ''}`} onClick={() => handleSaveTask(id)}>
        Save
      </button> 
      :
        <button className={`edit-task ${done ? 'edit-task_done' : ''}`} onClick={() => handleEditAction()}>
        Edit
      </button>
      }

      <button className="delete-task" onClick={() => handleDeleteTask(id)}>
        X
      </button>
    </li>
  )
}

export default ToDoItem
