import React from "react";
import { FaSun } from "react-icons/fa";
import {HiMoon} from 'react-icons/hi'
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
          {theme === "light" ? <HiMoon className="icon"/> : <FaSun className="icon"/>}
        </span>
        
      </div>
    </HeaderStyled>
  );
};

export default Header;
