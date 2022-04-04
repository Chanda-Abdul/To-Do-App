import styled from "styled-components";

export const TaskListStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  color: ${(props) => props.theme.contentColor};
  font-weight: 300;
  font-size: .75em;
  /* text-align: left; */
  
  padding: 0 5px;
  margin: auto;

  .task-wrapper {
    display: flex;
    flex-grow: 1;
    /* flex-shrink: 1; */
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;

    padding: 5px 20px;
    gap: 1em;
    width: 75vw;
    margin: 20px auto;
    border-radius: 5px;
    min-height: 300px;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.contentColor};
    box-shadow: 0px 5px 5px ${(props) => props.theme.shadowColor};
    transition: 1s ease;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 0;
  }

  li {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 5px 20px;
    margin: 0;
    &#text {
      align-content: flex-start;
    }
  }

  .listed-task {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    margin: auto;
    letter-spacing: -0.25px;
    color: ${(props) => props.theme.fontColor};
    /* text-align: left; */
  }
  .completed {
    color: ${(props) => props.theme.completedColor};
    text-decoration: line-through;
  }
  /* .task-complete-wrapper{
    
    width: 1em;
    height: 1em; 
    
} */
  .task-complete {
    display: inline-block;
    border-radius: 50%;
    margin: 0 10px 0 0;
    height: 1.25em;
    width: 1.25em;
    border-image-source: linear-gradient(
      135deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
  }
  /* .task-name {
    text-align: left;
  } */
  .check-gradient {
    border-radius: 50%;
    margin: 0 10px 0 0;
    height: 1.25em;
    width: 1.25em;

    border-image-source: linear-gradient(
      135deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
  }
  .task-summary {
    display: flex;
    flex-direction: row;
    padding: 5px;
    width: 75vw;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.summaryColor};
    font-weight: 200;
  }

  .task-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: ${(props) => props.theme.summaryColor};
    font-weight: 400;
    width: 80vw;
    margin: auto;
    box-shadow: 1px 1px 5px ${(props) => props.theme.shadowColor};
    background-color: ${(props) => props.theme.backgroundColor};
    /* color: ${(props) => props.theme.fontColor}; */
    border-radius: 5px;
    transition: 1s ease;
    padding: 1em;
  }
  /* .completed {
    text-align: end;
  } */
  .delete {
    display: flex;
    /* justify-content: flex-end; */
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    /* font-family: "Josefin Sans", sans-serif; */
    &svg {
      color: ${(props) => props.theme.fontColor};
    }
  }
  div:active {
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};

    font-family: "Josefin Sans", sans-serif;
  }

  @media (min-width: 768px) {
    /* width: 50vw; */

    ul,.task-wrapper,
    .task-summary, .task-filter {
      width: 50vw;
    }
  }

  @media (min-width: 1275px) {
    /* width: 50vw; */

    /* ul,.task-wrapper,
    .task-summary, .task-filter {
      width: 75vw;
    } */
  }
`;
