import React, { useState } from 'react'
import './TaskList.css'

export default function TaskList({tasks, handleFinish}) {
    return (
        <div className='tasklist-container'>
            <ul className='tasks'>
                {
                    tasks.map((el) =>
                    (<li 
                        // onClick={() => handleFinish(el.id)}
                        key={el.id} 
                        className={el.finished ? 'finished-task' : ''}>
                        <label className='container'>{el.text}
                        <input type='checkbox' 
                            checked={el.finished} 
                            onChange={() => handleFinish(el.id)}
                            />
                        <span className='checkmark'></span>
                        </label>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
