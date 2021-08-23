import {createStore} from "redux";


const TodoListReducer = (state ={TodoList: []}, action) => {
    if(action.type === "add"){
        let id = state.TodoList.length + 1
        return {
            ...state,
            TodoList: [
                ...state.TodoList,
                {text: action.text, id: id, status: "in-progress"}
            ]
        }
    } else if (action.type === "delete") {
        let todos = state.TodoList.filter((todo) => todo.id !== action.id)
        return {
            ...state,
            TodoList: [
                ...todos
            ]
        }
    } else if (action.type === "update" ) {
        // let todos = state.TodoList.filter((todo) => todo.id !== action.id)
        //
        // return {
        //     TodoList: [
        //         ...todos,
        //         {text: action.text, id: action.id, status: "in-progress"}
        //     ]
        // }
    } else if (action.type === "toggleStatus") {
        let todo = state.TodoList.filter((todo) => todo.id == action.id) // find
        todo[0].status = todo[0].status === "complete" ? "in-progress" : "complete"
        let todos = state.TodoList.filter((todo) => todo.id !== action.todo)
        return {
            ...state,
            TodoList: [
                ...todos,
            ]
        }
    } else {
        return state
    }
}

const store = createStore(TodoListReducer)

export default store