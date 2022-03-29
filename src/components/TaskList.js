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
          {currentTasks && (
            <ul>
              {currentTasks.map((task) => {
                return (
                  <div className="listed-task">
                    <li>
                      {!task.checked ? (
                        <>
                          <input
                            type="radio"
                            name="completed"
                            value="completed"
                            checked={task.checked}
                            className="task-complete"
                            // onChange={!task.checked}
                          />
                          {task.task}
                        </>
                      ) : (
                        <>
                          <BsFillCheckCircleFill className="check-gradient" />
                          <div className="completed">{task.task}</div>
                        </>
                      )}
                      {/* display this upon hover */}
                      <ImCross
                      //  onClick={removeTask(key)}
                      />
                    </li>
                  </div>
                );
              })}
            </ul>
          )}

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
