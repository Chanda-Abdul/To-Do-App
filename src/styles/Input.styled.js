import styled from "styled-components";

export const InputStyled = styled.div`
  .add-task-form {
    display: flex;
    /* flex-grow: 1; */
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    height: 2em;
    padding: 5px 20px;
    gap: 1em;
    width: 75vw;
    box-shadow: 1px 1px 5px ${(props) => props.theme.shadowColor};
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
    border-radius: 5px;
    transition: 1s ease;
  }
  .input-selector {
    display: inline-block;
    outline: none;
    width: 1.5em;
    height: 1.5em;
    margin-left: 10px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 50%;
    cursor: pointer;
    transition: all 1s;

   &:focus {
      color: ${(props) => props.theme.outlineColor};
    }

    &::placeholder {
      color: ${(props) => props.theme.fontColor};
    } 
 
 
  }
  input {
    position: relative;
    font-size: .65em;
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    border-color: transparent;
    padding: 10px 0;
    &::placeholder {
      color: ${(props) => props.theme.summaryColor};
    }
    &:focus {
      color: ${(props) => props.theme.fontColor};
      outline: ${(props) => props.theme.outlineColor};
  }
  }

 
  @media (min-width: 768px) {
    .add-task-form {
      height: 1.5em;
      width: 50vw;
      margin-top: .5em;
    }
  }
`;
