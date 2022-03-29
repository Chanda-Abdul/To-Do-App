import React, {useEffect} from 'react'

const TaskSummary = ({taskList, setTaskList}) => {
  const clearList = () => {
    localStorage.clear();
    // setTaskList([])
  }
  useEffect(() => {
    
  }, [taskList])
  return (
    <>
    <div className='task-summary'>
    <div className='task-count'>{taskList.length} items left</div>
    <div onClick={clearList}>
   
    Clear Completed</div>
    </div>
    </>
    
  )
}

export default TaskSummary