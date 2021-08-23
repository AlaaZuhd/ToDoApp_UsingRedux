import {createStore} from "redux";

export const ADD_TODO = "add"
export const DELETE_TODO = "delete"
export const TOGGLE_STATE = "toggleStatus"


const TodoListReducer = (state ={todoList: []}, action) => {
    if(action.type === ADD_TODO){
        let id = state.todoList.length + 1
        return {
            ...state,
            todoList: [
                ...state.todoList,
                {text: action.text, id: id, status: "in-progress"}
            ]
        }
    } else if (action.type === DELETE_TODO) {
        let todos = state.todoList.filter((todo) => todo.id !== action.id)
        return {
            ...state,
            todoList: [
                ...todos
            ]
        }
    } else if (action.type === "update" ) {
        // let todos = state.todoList.filter((todo) => todo.id !== action.id)
        //
        // return {
        //     todoList: [
        //         ...todos,
        //         {text: action.text, id: action.id, status: "in-progress"}
        //     ]
        // }
    } else if (action.type === TOGGLE_STATE) {
        let todo = state.todoList.filter((todo) => todo.id == action.id) // find
        todo[0].status = todo[0].status === "complete" ? "in-progress" : "complete"
        let todos = state.todoList.filter((todo) => todo.id !== action.todo)
        return {
            ...state,
            todoList: [
                ...todos,
            ]
        }
    } else {
        return state
    }
}

const store_ReactRedux = createStore(TodoListReducer)

export default store_ReactRedux