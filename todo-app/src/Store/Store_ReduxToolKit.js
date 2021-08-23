import { createSlice, configureStore } from "@reduxjs/toolkit";


const todoListSlice = createSlice({
    name: "todoListSlice",
    initialState: {todoList: []},
    reducers: {
        add(state, action){
            let id = state.todoList.length + 1
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {text: action.payload.text, id: id, status: "in-progress"}
                ]
            }
        },
        delete(state, action) {
            let todos = state.todoList.filter((todo) => todo.id !== action.payload.id)
            return {
                ...state,
                todoList: [
                    ...todos
                ]
            }
        },
        toggleStatus(state, action) {
            let todo = state.todoList.filter(todo => todo.id === action.payload.id) // find
            todo[0].status = todo[0].status === "complete" ? "in-progress" : "complete"
            let todos = state.todoList.filter(todoItem => todoItem.id !== action.payload.id)
            return {
                ...state,
                todoList: [
                    ...todos,
                ]
            }
        }
    }
})

export const todoListActions = todoListSlice.actions

const store_ReduxToolKit = configureStore({
    reducer: todoListSlice.reducer // {todoList: todoListSlice.reducer} // inc ase of many slices
})

export default store_ReduxToolKit