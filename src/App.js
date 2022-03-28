import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes.js";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import Input from "./components/Input.js";
import { StyledApp } from "./styles/App.Styled.js";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <StyledApp>
          <Header theme={theme} setTheme={setTheme} className="content" />
          <Input />
          <TaskList />
          <TaskFilter />
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
