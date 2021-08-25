import "../syle.css"
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {Button} from "react-bootstrap";
import  {todoListActions} from "../Store/Store_ReduxToolKit"
import {addTodo} from "../Store/Store_ReduxToolKit";

function TodoForm() {

    const [newTodoItem, setNewTodoItem] = useState("")
    const [getUsersState, setGetUsersState] = useState(false) // delete
    const dispatch = useDispatch()
    const state = useSelector(state => state.todoList) // delete
    const users = useSelector(state => state.users)

    const newTodoItemHandler = (event) => {
        setNewTodoItem(event.target.value)
    }

    // const addNewTodoItem = (event) => {
    //     if(newTodoItem.length > 0) {
    //         dispatch(todoListActions.add({type: "add", title: newTodoItem}))
    //         setNewTodoItem("")
    //     }
    // }

    const addNewTodoItem = () => {
        if(newTodoItem.length > 0) {
            dispatch(addTodo(newTodoItem))
            setNewTodoItem("")
        }
    }

    return (
        <div className="TodoForm">
            <input type="text"
                   value={newTodoItem}
                   placeholder="Enter a New Task to do"
                   onChange={newTodoItemHandler}
            />
            <Button onClick={addNewTodoItem}>Add ToDo</Button>
            <div>
                {
                    users && users.length>0 && users.map(user => <h1>{user.name}</h1>)
                }
            </div>
        </div>
    );
}

export default TodoForm;
