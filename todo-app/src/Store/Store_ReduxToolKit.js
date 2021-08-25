import { createSlice, configureStore } from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const getTodos = createAsyncThunk(
    "todos/getTodos",
    async (dispatch, getState) => {
        return await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => {return res.json()})
    }
)

export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (todoTitle, ThunkAPI) => {
        let id = ThunkAPI.getState().counter + 1;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title: todoTitle, id: id, userId: 1, completed: false})
        };
        return await fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
            .then(res=> {return res.json()})
    }
)

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (todoId, ThunkAPI) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        return await fetch("https://jsonplaceholder.typicode.com/todos/" + todoId, requestOptions)
            .then(res=> {let r = res.json(); return todoId})
    }
)

export const updateTodoStatus = createAsyncThunk(
    "todos/updateTodoStatus",
    async (todoId, ThunkAPI) => {
        let todo = ThunkAPI.getState().todoList.find(todo => todo.id === todoId)
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({completed: !todo.completed})
        };
        return await fetch("https://jsonplaceholder.typicode.com/todos/" + todoId, requestOptions)
            .then(res=> {let r = res.json(); return todoId})
    }
)



const todoListSlice = createSlice({
    name: "todoListSlice",
    initialState: {todoList: [], users:[], status: null, counter: 200},
    // reducers: {
    //     add(state, action){
    //         let id = state.counter + 1
    //         state.counter ++
    //         state.todoList.push({title: action.payload.title, id: id, completed: false})
    //     },
    //     delete(state, action) {
    //         let todos = state.todoList.filter((todo) => todo.id !== action.payload.id)
    //         state.todoList = todos
    //     },
    //     toggleStatus(state, action) {
    //         let todo = state.todoList.find(todo => todo.id === action.payload.id) // find
    //         todo.completed = todo.completed === true ? false : true
    //     }
    // },
    extraReducers: {
        [getTodos.pending]: (state, action) => {
            state.status = "loading"
        },
        [getTodos.fulfilled]: (state, action) => {
            state.status = "success"
            state.todoList = action.payload
        },
        [getTodos.rejected]: (state, action) => {
            state.status = "failed"
        },
        [addTodo.pending]: (state, action) => {
            state.status = "loading"
        },
        [addTodo.fulfilled]: (state, action) => {
            state.status = "success"
            state.counter ++
            state.todoList.push(action.payload)
        },
        [addTodo.rejected]: (state, action) => {
            state.status = "failed"
        },
        [deleteTodo.pending]: (state, action) => {
            state.status = "loading"
        },
        [deleteTodo.fulfilled]: (state, action) => {
            state.status = "success"
            // update the todo list
            let todos = state.todoList.filter((todo) => todo.id !== action.payload)
            state.todoList = todos
        },
        [deleteTodo.rejected]: (state, action) => {
            state.status = "failed"
        },
        [updateTodoStatus.pending]: (state, action) => {
            state.status = "loading"
        },
        [updateTodoStatus.fulfilled]: (state, action) => {
            state.status = "success"
            let todo = state.todoList.find((todo) => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        [updateTodoStatus.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export const todoListActions = todoListSlice.actions

const store_ReduxToolKit = configureStore({
    reducer: todoListSlice.reducer // {todoList: todoListSlice.reducer} // in case of many slices
})

export default store_ReduxToolKit