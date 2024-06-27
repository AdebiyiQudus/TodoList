import React, { useState } from "react";

export const EditTodoForm = ({editTaskProp, taskProp}) => {
  const [value, setValue] = useState(taskProp.task)

  const handleSubmit = function(e) {
    e.preventDefault();

    editTaskProp(value, taskProp.id);
    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input"
        value={value}
        placeholder="Update Task"
         onChange={(e) => setValue(e.target.value)}/>

         <button type="submit" className="todo-btn">
          Update Task
         </button>
      </form>
  )
}