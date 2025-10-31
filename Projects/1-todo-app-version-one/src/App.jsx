import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
    <Todoitem1 />
      <Todoitem2 />
      </div>
      
    </center>
  );
}

export default App;
