import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes.js";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Input from "./components/Input.js";
import { AppStyled } from "./styles/App.styled.js";
import starterList from './data.json'

function App() {
  const defaultTaskList = localStorage.getItem("TaskList") ? JSON.parse(localStorage.getItem("TaskList")) : [...starterList]
  const [theme, setTheme] = useState("light");
  const [taskList, setTaskList] = useState(defaultTaskList);
  const [taskFilter, setTaskFilter] = useState("all");
  

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppStyled>
          <Header theme={theme} setTheme={setTheme} className="content" />
          <Input taskList={taskList} setTaskList={setTaskList} />
          <TaskList
            taskList={taskList}
            setTaskList={setTaskList}
            taskFilter={taskFilter}
            setTaskFilter={setTaskFilter}
          />

          <Footer />
        </AppStyled>
      </ThemeProvider>
    </>
  );
}

export default App;
