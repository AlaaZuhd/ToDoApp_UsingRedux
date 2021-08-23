import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import {Provider} from "react-redux";
import store from "./Store/Store";

function App() {

    return (
      <Provider store={store}>
          <div className="App">
              <h1>ToDo App</h1>
              <TodoForm
              />
              <TodoList
              />
          </div>
    </Provider>
  );
}

export default App;
