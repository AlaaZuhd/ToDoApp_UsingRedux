import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import {Provider} from "react-redux";
import store_ReactRedux from "./Store/Store_ReactRedux";
import store_ReduxToolKit from "./Store/Store_ReduxToolKit";
function App() {
    // store={store_ReactRedux} in case of using react-redux
    return (
      <Provider store={store_ReduxToolKit}>
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
