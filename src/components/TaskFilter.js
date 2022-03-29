import React, {useState} from 'react'

const TaskFilter = ({taskFilter, setTaskFilter}) => {
  const [allTasks, setAllTasks] = useState("")
  const [activeTasks, setActiveTasks] = useState("")
  const [completedTasks, setCompletedTasks] = useState("")

  const updateFilter=(filter)=> {
    console.log(filter)
    setTaskFilter(filter)
  }
  return (
    <>
    <div className='task-filter'>
      <button 
      aria-label='All'
      value="all"
      className='filter-options'
      onClick={updateFilter('all')}
      >All</button>
      <button
      aria-label='Active'
      value="active"
      className='filter-options'
      onClick={updateFilter('active')}>Active</button>
      <button aria-label='Completed'
      value="completed"
      className='filter-options'
      onClick={updateFilter('completed')}>Completed</button>
    </div>
    </>
    
  )
}

export default TaskFilter