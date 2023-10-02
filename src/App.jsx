
import React, { useState, useEffect  } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList"; 
import "./styles.css";

export default function App() {
  
  const [Todos, setTodos] = useState(() => {
    const localValue =   localStorage.getItem("key")
    if(localValue == null) return []
    return JSON.parse(localValue)
  });
  
  useEffect(() => { 
    localStorage.setItem("key", JSON.stringify
    (Todos))
  }, [Todos])
  
 const AddTodo = (title) =>{
  setTodos((currentTodos) => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
          ];
        });  
 }


 const toggleTodo = (id, completed) => {
  setTodos((currentTodos) => {
    return currentTodos.map((Todo) => {
      if (Todo.id === id) {
        //mutating my state whcih is not possible

        // Todos.completed = completed
        return { ...Todo, completed }; //creating a brand new state object because state is immutable which means you cannot change it
      }
      return Todo;
    });
  });
};

const deleteTodo = (id) => {
  setTodos((currentTodos) => {
    return currentTodos.filter((Todo) => Todo.id !== id);
  });
};


  return (
    <>
     
<TodoForm onSubmit={AddTodo}/>
      <h1 className="header">ToDo List</h1>
      <TodoList Todos={Todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
