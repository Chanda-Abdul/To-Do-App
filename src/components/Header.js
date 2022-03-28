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
      <div>
        <h1>ToDo {" "}<span onClick={() => themeToggler()}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </span></h1>
        
      </div>
    </HeaderStyled>
  );
};

export default Header;
