import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
// import {Provider} from "react-redux";
// import store_ReduxToolKit from "./Store/Store_ReduxToolKit";
import store_ReactRedux from "./Store/Store_ReactRedux";
import {useEffect, useState} from "react";
import {getTodos, getUsers} from "./Store/Store_ReduxToolKit";
import {useDispatch} from "react-redux";
import Notification from "./Components/Notification"

function App() {
    // store={store_ReactRedux} in case of using react-redux
    const dispatch = useDispatch()
    const [state, setState] = useState(false)
    useEffect(async () => {
        dispatch(getTodos())
        setState(true)
    }, [])

    return (
      // <Provider store={store_ReduxToolKit}>
          <div className="App">
              <Notification />
              <h1>ToDo App</h1>
              <TodoForm
              />
              {state && <TodoList
              />}
          </div>
    // </Provider>
  );
}

export default App;
