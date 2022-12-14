import { Action } from "@remix-run/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

export const TaskList = () => {
    const allTasks = useSelector()
}

const taskListSlice = createSlice({
    name: 'taskList',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        },
        toggleTask: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload)
            if (index !== -1) state[index].completed = !state[index.completed];
        }

    }
});

export const { addTask, toggleTask } = taskListSlice.actions;
export default taskListSlice.reducer;

// const addTask = (task) => {
//     return {
//         type: 'taskList/addTask',
//         payload: todo
//     }
// }

// const toggleTask = (task) => {
//     return {
//         type: 'taskList/toggleTask',
//         payload: task
//     }
// }

// const taskList = (state = [], actiion) => {
//     switch (action.type) {
//         case 'taskList/addTask':
//             return [
//                 ...state,
//                 {
//                     id: action.payload.id,
//                     text: action.payload.text,
//                     completed: false
//                 }
//             ];
//         case 'taskList/toggleTask':
//             return state.map(task => 
//                 task.id === action.payload.id ? {...task, completed: !task.completed} : task);
//         default:
//             return state;
//     }
// }