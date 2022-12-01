import React, { useState } from 'react'
import './TaskList.css'

export default function TaskList() {
    const defaulTaskList = [
        { text: 'Accomplish something', finished: false, id: 1 },
        { text: 'Create new feature', finished: true, id: 2 },
        { text: 'Achieve the goal', finished: false, id: 3 },
    ]
    const [tasks, setTasks] = useState(defaulTaskList);
    const handleClick = ({target}) => {

    }
    return (
        <div>
            <ul>
                {
                    tasks.map((el) =>
                    (<li className={el.finished ? 'finished-task' : ''}>
                        <label className='container' onClick={handleClick}>{el.text}
                        <input type='checkbox' checked={el.finished} />
                        <span className='checkmark'></span>
                        </label>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
