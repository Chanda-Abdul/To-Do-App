import styled from "styled-components";

export const InputStyled = styled.div`
  .add-task-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 2em;
    padding: 5px 10px;
    gap: 1em;
    max-width: 75vw;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};
    box-shadow: ${(props) => props.theme.shadowColor};
    margin-top: 1em;
    margin-bottom: 0;
    border-radius: 6px;
    transition: 1s ease;
  }
  .input-selector {
    display: inline;
    outline: none;
    /* width: 80%; */
    width: 20px;
    height: 20px;
    margin-left: 10px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 50%;
    cursor: pointer;

    &:focus {
      color: ${(props) => props.theme.color};
    }
    &::placeholder {
      color: ${(props) => props.theme.color};
    }
  }
  input {
    position: relative;
    letter-spacing: -0.25px;
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.color};
    border: transparent;
    padding: 1.5em 0;
    outline: none;
    &::placeholder {
      color: ${(props) => props.theme.color};
    }
  }

  input:focus {
    outline: ${(props) => props.theme.outlineColor};
  }

  @media (min-width: 768px) {
    .add-task-form {
      height: 3em;
      max-width: 50vw;
      margin-top: 1.5em;
    }
  }

  /* TO DO => why is dark mode input text black? focus? */
`;
