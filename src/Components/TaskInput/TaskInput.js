import React, {useState} from 'react'
import './TaskInput.css'

export default function TaskInput({newTask, handleChangeNewTask, onSubmitNewTask}) {

    return (
        <form onSubmit={onSubmitNewTask}>
        <input 
            minLength={1}
            maxLength={70}
            onChange={handleChangeNewTask}
            type='text' 
            placeholder='Enter your task' 
            value={newTask.text || ''}
        />
        <input type='submit' />
        </form>
    )
}
