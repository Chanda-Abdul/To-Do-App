import React, {useState} from 'react'

const TaskFilter = ({taskFilter, setTaskFilter}) => {
  const [allTasks, setAllTasks] = useState("")
  const [activeTasks, setActiveTasks] = useState("")
  const [completedTasks, setCompletedTasks] = useState("")

  return (
    <>
    <div className='task-filter'>
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>
    </div>
    </>
    
  )
}

export default TaskFilter