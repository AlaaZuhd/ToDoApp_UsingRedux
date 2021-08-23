import "../syle.css"
import {useDispatch} from "react-redux";
import {Button, Row, Col} from "react-bootstrap"


function TodoItem(props) {

    const dispatch = useDispatch()

    const deleteTodoItemhandler = () => {
        dispatch({type: "delete", id: props.todo.id})
    }

    const statusTodoItemhandler = () => {
        dispatch({type: "toggleStatus", id: props.todo.id})
    }

    // const updateTodoItemhandler = () => {
    //
    // }

    // const toggleTodoItemStatus = () => {
    //     dispatch({type: "toggleStatus", id: props.todo.id})
    // }

    return (
        <li className="item-container" >
            <div className="d-flex flex-row justify-content-around align-items-center">
                <div>{props.todo.text}</div>
                <div className="d-flex flex-row justify-content-end">
                    <Button onClick={deleteTodoItemhandler}>Delete</Button>
                    <Button onClick={statusTodoItemhandler}>{props.todo.status === "complete"? "Undo-Complete": "Done"}</Button>
                </div>
                {/*<button onClick={updateTodoItemhandler}>Update</button>*/}
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
