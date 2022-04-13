import React, { useState } from "react";
import { TaskListStyled } from "../styles/TaskList.styled";
import TaskFilter from "./TaskFilter";
import TaskSummary from "./TaskSummary";
import ToDoItem from "./ToDoItem";


const TaskList = ({ taskList, setTaskList, taskFilter, setTaskFilter }) => {
  // const [fbTaskList, setFbTaskList] = useState([]);

  let currentTasks = taskList;
  console.log(taskList);

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
          <ul>
          {/* {console.log(currentTasks)} */}
          {currentTasks.length > 0 &&
            currentTasks.map(({ taskId, task, checked }, index) => {
              // console.log(taskId, task, checked, index);
              return (
                <ToDoItem
                  taskId={taskId}
                  index={index}
                  checked={checked}
                  task={task}
                  taskList={taskList} setTaskList={setTaskList}
                />
              );
            })}
            </ul>
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
