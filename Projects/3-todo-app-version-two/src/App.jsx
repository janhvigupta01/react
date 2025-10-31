import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Todoitems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    { todoDate: "4/10/2023", todoName: "Buy Milk" },
    { todoDate: "4/10/2023", todoName: "Go to college" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
