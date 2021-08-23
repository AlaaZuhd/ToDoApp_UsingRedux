import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {Button} from "react-bootstrap";
import  {todoListActions} from "../Store/Store_ReduxToolKit"

function TodoForm() {

    const [newTodoItem, setNewTodoItem] = useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state.TodoList)

    const newTodoItemHandler = (event) => {
        setNewTodoItem(event.target.value)
    }

    const addNewTodoItem = (event) => {
        if(newTodoItem.length > 0) {
            // dispatch({type: "add", text: newTodoItem})
            dispatch(todoListActions.add({type: "add", text: newTodoItem}))
            setNewTodoItem("")
            // if(state.length > 0 )
            // alert(state[state.length-1].text)
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
        </div>
    );
}

export default TodoForm;
