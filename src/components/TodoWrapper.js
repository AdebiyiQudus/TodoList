import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4} from "uuid";
import Todo from "./Todo";
import { EditTodoForm } from "./EditTodoForm"
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = function(todo) {
// In Each of the todo(input value) has a property of task and the value of that property is the todo(value) `itself`
    setTodos([...todos, {id: uuidv4(), task: todo,
      completed: false, isEditing: false}])

    console.log(todos)
  }

  function toggleComplete(id) {
// if each of the todo.id === cur todo.id clicked return and update the completed of that todo as !todo.completed and vice-versa
    setTodos(todos.map((todo)=> todo.id === id ? 
      {...todo, completed: !todo.completed} : todo))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function editTodo(id) {
    setTodos(todos.map((todo) => todo.id === id ? 
      {...todo, isEditing: !todo.isEditing} : todo))
  }

  // The "task" in this function is referring to the updated task from the EditTodoForm
  function editTask(task, id) {
    setTodos(todos.map((todo) => todo.id === id ?
    {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodoProp={addTodo}/>

       {/* Generate a todo for each value in the state */}
      {todos.map((todo, index) => (
 // If isEditing is true, return the EditTodoForm Component else reurn the todo component 
        todo.isEditing ? (
          <EditTodoForm editTaskProp={editTask}
           taskProp={todo} key={index} />
        ) :( 
          <Todo taskProp={todo} key={index} 
          toggleCompleteProp={toggleComplete}
          deleteTodoProp={deleteTodo}
          editTodoProp={editTodo} />
          )

      ))}
      </div>
  )
}