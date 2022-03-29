import React from "react";
// import Input from "./Input";
import { FaMoon, FaSun } from "react-icons/fa";
import { HeaderStyled } from "../styles/Header.styled";

const Header = ({ theme, setTheme }) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <HeaderStyled>
      <div className="title">
        <h1>ToDo </h1>
        <span className="theme-toggle" onClick={() => themeToggler()}>
          {theme === "light" ? <FaMoon className="icon"/> : <FaSun className="icon"/>}
        </span>
        
      </div>
    </HeaderStyled>
  );
};

export default Header;
