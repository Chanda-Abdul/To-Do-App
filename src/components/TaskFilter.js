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
      <div 
      aria-label='All'
      value="all"
      className='filter-options .all'
      onClick={updateFilter('all')}
      >All</div>
      <div
      aria-label='Active'
      value="active"
      className='filter-options .active'
      onClick={updateFilter('active')}>Active</div>
      <div aria-label='Completed'
      value="completed"
      className='filter-options .completed'
      onClick={updateFilter('completed')}>Completed</div>
    </div>
    </>
    
  )
}

export default TaskFilter