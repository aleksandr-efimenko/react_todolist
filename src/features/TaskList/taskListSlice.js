import { Action } from "@remix-run/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const TaskList = () => {
    const allTasks = useSelector()
}

const addTodo = (task) => {
    return {
        type: 'taskList/addTask',
        payload: todo
    }
}

const toggleTodo = (task) => {
    return {
        type: 'taskList/toggleTask',
        payload: task
    }
}

const taskList = (state = [], actiion) => {
    switch (action.type) {
        case 'taskList/addTask':
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ];
        case 'taskList/toggleTask':
            return state.map(task => 
                task.id === action.payload.id ? {...task, completed: !task.completed} : task);
        default:
            return state;
    }
}