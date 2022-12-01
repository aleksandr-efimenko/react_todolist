import React, { useState } from 'react'
import './TaskList.css'

export default function TaskList() {
    const defaulTaskList = [
        { text: 'Accomplish something', finished: false, id: 1 },
        { text: 'Create new feature', finished: false, id: 2 },
        { text: 'Achieve the goal', finished: false, id: 3 },
    ]
    const [tasks, setTasks] = useState(defaulTaskList);
    return (
        <div>
            <ul>
                {
                    tasks.map((el) =>
                    (<li>
                        <label className='container'>{el.text}
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
