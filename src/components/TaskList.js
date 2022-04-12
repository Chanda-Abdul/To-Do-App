import React, { useState, useEffect } from "react";
import { TaskListStyled } from "../styles/TaskList.styled";
import TaskFilter from "./TaskFilter";
import TaskSummary from "./TaskSummary";
import { GrClose } from "react-icons/gr";
import { BsFillCheckCircleFill } from "react-icons/bs";


const TaskList = ({ taskList, setTaskList, taskFilter, setTaskFilter }) => {
  const [fbTaskList, setFbTaskList] = useState([])
  
  let currentTasks = taskList;

  // const removeTask = async (task)=>{
  //   await deleteDoc(doc(store, "taskItem", task.id))

  // }

  // const toggleTaskComplete = async(task)=> {
  //   await updateDoc(doc(store, "taskItem", task.id), {
  //     checked: !task.checked
  //   })

  // }
  // useEffect(() => {
  //   // const queried = query(collection(store, 'taskItem'))
  //   // const unsub = 
  //   onSnapshot(store(collection, 'taskItem'), (snapshot)=> {
  //     let tempTaskList = []
  //     snapshot.docs.forEach((doc) => {
  //       tempTaskList.push({...doc.data(), id: doc.id})
  //     })
  //     setFbTaskList(tempTaskList)
  //   })
    
  //     const completed = taskList.filter((task) => task.checked)
  //     let completeTasks = []
  //     completed.forEach(task => {
  //       completeTasks.push(task)
  //     })
  //     //setComplete(completedTasks)
  //     console.log(fbTaskList)

  // }, [fbTaskList]);

  return (
    <>
      <TaskListStyled>
        <div className="task-wrapper">
          {currentTasks && (
            <ul>
              {currentTasks.map((task) => {
                return (
                  <div className="listed-task">
                    <li key={task.id}>
                      {!task.checked ? (
                        <>
                         <div className="task-name">
                          <input
                            type="radio"
                            name="completed"
                            value="completed"
                            checked={task.checked}
                            className="task-complete"
                            // onChange={toggleTaskComplete(task)}
                          />{task.task}
                         </div>
                        </>
                      ) : (
                        <>
                          <BsFillCheckCircleFill className="check-gradient" />
                          <div className="completed">{task.task}</div>
                        </>
                      )}
                      {/* display this upon hover */}
                      <div className="delete">
                      <GrClose className="delete-icon"
                      //  onClick={removeTask(task)}
                      />
                      </div>
                      
                    </li>
                  </div>
                );
              })}
            </ul>
          )}

          <TaskSummary taskList={taskList} setTaskList={setTaskList} />

          
        </div>
        <TaskFilter
            taskList={taskList}
            taskFilter={taskFilter}
            setTaskFilter={setTaskFilter}
          />
      </TaskListStyled>
    </>
  );
};

export default TaskList;
