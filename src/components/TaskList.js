import React, { useEffect } from "react";
import { TaskListStyled } from "../styles/TaskList.styled";
import TaskFilter from "./TaskFilter";
import TaskSummary from "./TaskSummary";
import { ImCross } from "react-icons/im";
import { BsFillCheckCircleFill } from "react-icons/bs";

const TaskList = ({ taskList, setTaskList, taskFilter, setTaskFilter }) => {
  let currentTasks = taskList;

  // const  removeTask = (key)=>{

  // }
  useEffect(() => {}, [taskList]);

  return (
    <>
      <TaskListStyled>
        <div className="task-wrapper">
          <div className="listed-task">
            {currentTasks && (<ul>{currentTasks.map((task)=> {
              return (<div className="task-complete-wrapper">
                <li>
  {!task.check ? (
                        <input
                          type="radio"
                          name="completed"
                          value="completed"
                          checked={task.checked}
                          className="task-complete"
                          // onChange={!task.checked}
                        />
                      ) : (
                        <BsFillCheckCircleFill className="check-gradient" />
                      )}

                      {task.task}
                      <ImCross
                      //  onClick={removeTask(key)}
                      /></li>
              </div>)
            })}</ul>)}
            

              {/* {currentTasks && (currentTasks.map((task) => {
                return (
                  <div className="task-complete-wrapper">
                   
                    </li>
                  </div>)
          
              })} */}
            
          </div>
          <TaskSummary taskList={taskList} setTaskList={setTaskList} />

          <TaskFilter
            taskList={taskList}
            taskFilter={taskFilter}
            setTaskFilter={setTaskFilter}
          />
        </div>
      </TaskListStyled>
    </>
  );
};

export default TaskList;
