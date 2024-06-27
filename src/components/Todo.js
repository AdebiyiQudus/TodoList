import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({taskProp, 
  toggleCompleteProp, deleteTodoProp, editTodoProp}) {

  return (
    <div className="Todo">
      <p onClick={() => toggleCompleteProp(taskProp.id)}
       className={`${taskProp.completed ? 'completed' : ""}`}>
        {taskProp.task}</p>

      <div>
        <FontAwesomeIcon icon={faPenToSquare} 
          onClick={() => editTodoProp(taskProp.id)}/>
        <FontAwesomeIcon icon={faTrash}
         onClick={() => deleteTodoProp(taskProp.id)}/>
      </div>
    </div>
  )
}