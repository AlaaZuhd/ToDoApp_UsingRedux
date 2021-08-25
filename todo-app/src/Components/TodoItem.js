import "../syle.css"
import {useDispatch} from "react-redux";
import {Button} from "react-bootstrap"
import  {todoListActions} from "../Store/Store_ReduxToolKit"
import {deleteTodo, updateTodoStatus} from "../Store/Store_ReduxToolKit";

function TodoItem(props) {

    const dispatch = useDispatch()

    // const deleteTodoItemhandler = () => {
    //     // dispatch({type: "delete", id: props.todo.id})
    //     dispatch(todoListActions.delete({id: props.todo.id}))
    // }

    // const updateTodoItemStatushandler = () => {
    //     // dispatch({type: "toggleStatus", id: props.todo.id})
    //     dispatch(todoListActions.toggleStatus({id: props.todo.id}))
    //     // dispatch(todoListActions.toggleStatus({id: props.todo.id}))
    // }

    const deleteTodoItemhandler = () => {
        dispatch(deleteTodo(props.todo.id))
    }

    const updateTodoItemStatushandler = () => {
        dispatch(updateTodoStatus(props.todo.id))
    }

    // const updateTodoItemhandler = () => {
    //
    // }

    // const toggleTodoItemStatus = () => {
    //     dispatch({type: "toggleStatus", id: props.todo.id})
    // }

    return (
        <li className="item-container" >
            <div className="d-flex flex-row justify-content-around align-items-center todo-item">
                <div className="text-container">{props.todo.title}</div>
                <div className="d-flex flex-row justify-content-around btn-container">
                    <Button onClick={deleteTodoItemhandler}>Delete</Button>
                    <Button onClick={updateTodoItemStatushandler}>{props.todo.completed === true? "Undo-Complete": "Done"}</Button>
                </div>
            </div>
            {/*<Row>*/}
            {/*    <Col><span>{props.todo.text}</span></Col>*/}
            {/*    <Col><Button onClick={deleteTodoItemhandler}>Delete</Button></Col>*/}
            {/*    <Col><Button onClick={statusTodoItemhandler}>{props.todo.status === "complete"? "Undo-Complete": "Done"}</Button></Col>*/}
            {/*</Row>*/}
        </li>
    );
}

export default TodoItem;
