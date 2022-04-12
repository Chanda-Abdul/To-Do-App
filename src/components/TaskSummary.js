import React, {useEffect} from 'react'

const TaskSummary = ({taskList, setTaskList}) => {
  const clearCompleted = () => {
    const listWithoutCompletedTasks = [...taskList.filter(task=>!task.checked)]
    setTaskList(listWithoutCompletedTasks)
    // console.log(listWithoutCompletedTasks )
    // localStorage.clear();
    // setTaskList([])
  }
  // useEffect(() => {
    
  // }, [taskList])
  return (
    <>
    <div className='task-summary'>
    <div className='task-count'>{taskList.length} items left</div>
    <div onClick={clearCompleted}>
   
    Clear Completed</div>
    </div>
    </>
    
  )
}

export default TaskSummary