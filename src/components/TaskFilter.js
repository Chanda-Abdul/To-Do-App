import React from 'react'

const TaskFilter = ({taskFilter, setTaskFilter}) => {
  // const [allTasks, setAllTasks] = useState("")
  // const [activeTasks, setActiveTasks] = useState("")
  // const [completedTasks, setCompletedTasks] = useState("")

  const updateAndFilterTaskList = (filter)=> {
   setTaskFilter(filter)
    
  //  console.log(filter)
    
  }
  return (
    <>
    <div className='task-filter'>
      <div 
      aria-label='All'
      value="all"
      className='filter-options .all'
      onClick={() => updateAndFilterTaskList("all")}
      >All</div>
      <div
      aria-label='Active'
      value="active"
      className='filter-options .active'
      onClick={() => updateAndFilterTaskList("active")}>Active</div>
      <div aria-label='Completed'
      value="completed"
      className='filter-options .completed'
      onClick={() => updateAndFilterTaskList("completed")}>Completed</div>
    </div>
    </>
    
  )
}

export default TaskFilter