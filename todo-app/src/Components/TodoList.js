import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

function TodoList() {

    const todos = useSelector(state => state.todoList)
    return (
        <div className="TodoList">
            <ul>
                {todos.map(todo =>
                    <TodoItem key= {todo.id} todo={todo} />
                )}
            </ul>
        </div>
    );
}

export default TodoList;
