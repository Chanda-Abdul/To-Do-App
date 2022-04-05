import React, { useState } from "react";
import { InputStyled } from "../styles/Input.styled";
import { store } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Input = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState("");
  const [newTaskId, setNewTaskId] = useState(0);

  const addNewTask = async (e) => {
    e.preventDefault();
    if(newTask !== ""){
      await addDoc(collection(store, "taskItem"), {
        task: newTask,
        check: false,
        id: newTaskId
      })
      setNewTaskId(newTaskId + 1)
      setNewTask("")
    }
    // setNewTask(e.target.value);
    // console.log(newTask);
    // const task = {
    //   id: taskList.length + 1,
    //   task: newTask,
    //   checked: false,
    // };
    // updateTaskListInLocalStorage(task)
    // setNewTask("");
  };

  // const updateTaskListInLocalStorage = (task) => {
  //   let updatedTaskList =
  //     JSON.parse(localStorage.getItem("TaskList")) || taskList;
  //     updatedTaskList = [task, ...taskList];
  //   setTaskList(updatedTaskList);
  //   localStorage.setItem(
  //     "TaskList",
  //     JSON.stringify(updatedTaskList)
  //   ); 
  // };

  return (
    <>
      <InputStyled>
        <div>
          <form className="add-task-form" onSubmit={addNewTask}>
            <button
              aria-label="add new task"
              type="submit"
              className="input-selector"
            ></button>
            <input
              type="text"
              aria-label="Create a new task..."
              placeholder="Create a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              required
            />
          </form>
        </div>
      </InputStyled>
    </>
  );
};

export default Input;
