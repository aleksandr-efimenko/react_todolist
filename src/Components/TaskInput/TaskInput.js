import React, {useState} from 'react'


export default function TaskInput() {
    const [taskText, settaskText] = useState('');
    
    return (
        <input type='text' placeholder='Enter your task' />
    )
}
