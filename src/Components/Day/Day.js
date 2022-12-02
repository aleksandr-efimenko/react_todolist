import React, { useState } from 'react'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import './Day.css'

export default function Day({date}) {
  const defaulTaskList = [
    { text: 'Accomplish something', finished: false, id: date.valueOf() + 1 },
    { text: 'Create new feature', finished: true, id: date.valueOf() + 2 },
    { text: 'Achieve the goal', finished: false, id: date.valueOf() + 3 },
  ]
  const [tasks, setTasks] = useState(defaulTaskList);
  const handleFinish = (taskId) => {
    const newArr = tasks.map(obj => {
      if (obj.id === taskId) {
        return {...obj, finished: !obj.finished};
      }
      return obj;
    })      
    setTasks(newArr);
  }
  const [newTask, setNewTask] = useState({});
  const handleChangeNewTask = ({target}) => {
    setNewTask({
      text: target.value,
      finished: false,
      id: new Date().valueOf()
    });
  }
  const onSubmitNewTask = (event) => {
    event.preventDefault();
    if (!newTask.text) return;
    setTasks([newTask, ...tasks]);
    setNewTask({});
  }
  return (
    <div className='day-card'><p>{date.toDateString()}</p>
      <TaskInput 
        onSubmitNewTask={onSubmitNewTask} 
        newTask={newTask}
        handleChangeNewTask={handleChangeNewTask}
      />
      <TaskList 
        tasks={tasks} 
        handleFinish={handleFinish} 
      />
    </div>
  )
}
