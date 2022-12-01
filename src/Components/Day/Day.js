import React from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from  '../TaskList/TaskList'

export default function Day() {
  return (
    <div><p>Date</p>
        <TaskInput />
        <TaskList />
    </div>
  )
}
