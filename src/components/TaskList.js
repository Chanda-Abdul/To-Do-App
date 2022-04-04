import React, { useEffect } from "react";
import { TaskListStyled } from "../styles/TaskList.styled";
import TaskFilter from "./TaskFilter";
import TaskSummary from "./TaskSummary";
import { GrClose } from "react-icons/gr";
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
          {currentTasks && (
            <ul>
              {currentTasks.map((task) => {
                return (
                  <div className="listed-task">
                    <li>
                      {!task.checked ? (
                        <>
                         <div className="task-name">
                          <input
                            type="radio"
                            name="completed"
                            value="completed"
                            checked={task.checked}
                            className="task-complete"
                            // onChange={!task.checked}
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
                      //  onClick={removeTask(key)}
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
