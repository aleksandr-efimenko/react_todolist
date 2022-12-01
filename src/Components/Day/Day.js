import React, {useState} from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from  '../TaskList/TaskList'

export default function Day() {
    const [date, setDate] = useState(new Date());
  return (
    <div><p>{date.toDateString()}</p>
        <TaskInput />
        <TaskList />
    </div>
  )
}
