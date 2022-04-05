import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes.js";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Input from "./components/Input";

// import firebase from "./firebase.js";
import starterList from './data.json'
import {StyledApp } from "./styles/App.styled";

function App() {
  const defaultTaskList = localStorage.getItem("TaskList") ? JSON.parse(localStorage.getItem("TaskList")) : [...starterList]
  const [theme, setTheme] = useState("light");
  const [taskList, setTaskList] = useState(defaultTaskList);
  const [taskFilter, setTaskFilter] = useState("all");

// const ref = firebase.firestore().collection("taskItem")
// console.log(ref)
  

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        
      
          <Header theme={theme} setTheme={setTheme} className="content" />
          <Input taskList={taskList} setTaskList={setTaskList} />
          <TaskList
            taskList={taskList}
            setTaskList={setTaskList}
            taskFilter={taskFilter}
            setTaskFilter={setTaskFilter}
          />

          <Footer />
         
          </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
