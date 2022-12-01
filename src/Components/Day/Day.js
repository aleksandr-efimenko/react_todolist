import React, { useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'

export default function Day() {
  const defaulTaskList = [
    { text: 'Accomplish something', finished: false, id: 1 },
    { text: 'Create new feature', finished: true, id: 2 },
    { text: 'Achieve the goal', finished: false, id: 3 },
  ]
  const [tasks, setTasks] = useState(defaulTaskList);
  const handleFinish = (taskId) => {
    const newArr = tasks.map(obj => {
      if (obj.id === taskId) {
        return {...obj, finished: !obj.finished};
      }
      return obj;
    })      
    console.log(newArr);
    setTasks(newArr);
  }
  const [date, setDate] = useState(new Date());
  // setDate(new Date());
  return (
    <div><p>{date.toDateString()}</p>
      <TaskInput />
      <TaskList 
        tasks={tasks} 
        handleFinish={handleFinish} 
      />
    </div>
  )
}
