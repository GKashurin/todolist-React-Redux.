import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

function App() {

  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
