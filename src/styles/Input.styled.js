import styled from "styled-components";

export const InputStyled = styled.div`
  .add-task-form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};
    box-shadow: ${(props) => props.theme.shadowColor};
    margin-top: 1.5em;
    border-radius: 6px;
    transition: 1s ease;
   
  }
  .input-selector {
    display: inline-block;
    outline: none;
    width: 80%;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 50%;
    cursor: pointer;
    &:focus{
    color: ${(props) => props.theme.color};
  }
  &::placeholder{
    color: ${(props) => props.theme.color};
  }
  }
  input{
   position: relative;
    letter-spacing: -0.25px;
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.color};
    border: transparent;
    padding: 1.5em 0;
    outline: none;
    &::placeholder{
    color: ${(props) => props.theme.color};
  }
  }

  input:focus{
    outline: ${(props) => props.theme.outlineColor};;
  }
  
  /* TO DO => why is dark mode input text black? focus? */

`;
