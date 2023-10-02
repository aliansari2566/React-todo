 
import { TodoItem } from "./TodoItem";

export const TodoList = ({ Todos , toggleTodo, deleteTodo }) => {
//   const toggleTodo = (id, completed) => {
//     setTodos((currentTodos) => {
//       return currentTodos.map((Todo) => {
//         if (Todo.id === id) {
//           //mutating my state whcih is not possible

//           // Todos.completed = completed
//           return { ...Todo, completed }; //creating a brand new state object because state is immutable which means you cannot change it
//         }
//         return Todo;
//       });
//     });
//   };

//   const deleteTodo = (id) => {
//     setTodos((currentTodos) => {
//       return currentTodos.filter((Todo) => Todo.id !== id);
//     });
//   };

  return (
    <ul className="list">
      {Todos.length === 0 && "No ToDos"}
      {Todos.map((Todo) => {
        return (
          <TodoItem
            // id={Todo.id}
            // completed={Todo.completed}
            // title={Todo.title} 
            //above three lines are same as this one single with spread
            {...Todo}
            key={Todo.id} toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
