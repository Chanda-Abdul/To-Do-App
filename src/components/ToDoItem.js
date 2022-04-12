import React from "react";
import { GrClose } from "react-icons/gr";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ToDoItem = ({ taskId, index, checked, task, taskList, setTaskList }) => {
  const deleteTask = (id) => {
    console.log(id);
    const listWithoutDeletedTasks = [
      ...taskList.filter((task) => task.taskId !== id),
    ];
    // console.log(listWithoutDeletedTasks)
    setTaskList(listWithoutDeletedTasks);
  };
  return (
    <>
      <div className="listed-task">
        <li key={index}>
          {console.log(taskId, index, checked, task, "task")}
          {checked ? (
            <div className="task-item">
              <BsFillCheckCircleFill className="task-complete" />
              <div className="task-name completed">{task}</div>
              <GrClose
                aria-label="Delete task"
                value={taskId}
                className="delete-icon"
                onClick={() => deleteTask(taskId)}
              />
            </div>
          ) : (
            <div className="task-item">
              <input
                type="radio"
                name="completed"
                value="completed"
                checked={checked}
                className="task-incomplete"
                // onChange={toggleTaskComplete(task)}
              />
              <div className="task-name incomplete">{task}</div>
              <div className="delete">
                <GrClose
                  aria-label="Delete task"
                  value={taskId}
                  className="delete-icon"
                  onClick={() => deleteTask(taskId)}
                />
              </div>
            </div>
          )}
        </li>
      </div>
      {/* 
     
        {/* {!task.checked ? ( */}
      {/* <> */}
      {/* <div className="task-name">
            <input
              type="radio"
              name="completed"
              value="completed"
              checked={task.checked}
              className="task-complete" */}
      {/* // onChange={toggleTaskComplete(task)} */}
      {/* />{task.task} */}
      {/* </div> */}
    </>
  );
};

export default ToDoItem;
