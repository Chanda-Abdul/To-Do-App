import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes.js";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Input from "./components/Input";
import starterList from "./data.json";
import { StyledApp } from "./styles/App.styled.js";

function App() {
  const defaultTaskList = localStorage.getItem("TaskList")? JSON.parse(localStorage.getItem("TaskList")): [...starterList];
  const [theme, setTheme] = useState("light");
  const [taskList, setTaskList] = useState(defaultTaskList);
  const [taskFilter, setTaskFilter] = useState("all");
// console.log(taskList)
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
