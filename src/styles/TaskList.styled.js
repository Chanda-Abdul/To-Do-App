import styled from "styled-components";

export const TaskListStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  color: ${(props) => props.theme.contentColor};
  margin: auto;
 

  .task-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    /* height: 100%; */
    width: 75vw;
    margin: 20px auto;
    border-radius: 5px;
    min-height: 300px;
    /* max-height: fit-content; */
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.contentColor};
    box-shadow: 0px 5px 5px ${(props) => props.theme.shadowColor};
    transition: 1s ease;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    height: 100%;
  }

  li {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 5px 10px;
    margin: 0;
    &#text {
      align-content: flex-start;
    }
  }

  .listed-task {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    cursor: pointer;
    width: 100%;
    padding: 5px;
    margin: 5px;
    letter-spacing: -0.25px;
    color: ${(props) => props.theme.fontColor};
  }
  

  .task-incomplete {
    display: inline-block;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    margin: 0 10px 0 0;
    height: 24px;
    width: 24px;
  }
  .task-complete {
    /* &.completed {
       background-repeat: no-repeat;
      background-position: center;
       /* &svg {
        background: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%));
     } */
    /* } */ 
   
    margin: 0 10px 0 0;
    height: 24px;
    width: 24px;
  }
  .delete {
   transition: opacity 0.5s ease-in-out;
   background: transparent;
   /* opacity: 0; */
   cursor: pointer;
    margin: 0 0 0 10px;

    &:focus{
      opacity: 1;
    }
    &svg{
      /* display: none;  */
      height: 24px;
    width: 24px;
    transition: 1s ease;
    & > path {
      fill:${(props) => props.theme.borderColor};
      opacity: 1;
      /* @include apply-theme-color('fill', 'color-path'); */
    }
   
    }
    
   
    &:not(:hover){
      .task-complete:not(.completed) {
        border: 1px solid ${(props) => props.theme.borderColor};
    }

    }
    
  }
  .task-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
   
  }
  .task-name {
    width: 100%;
    &.completed {
    color: ${(props) => props.theme.completedColor};
    text-decoration: line-through;
  }
  }

  .task-summary {
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 75vw;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.summaryColor};
    font-weight: 200;
  }

  .task-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: ${(props) => props.theme.summaryColor};
    font-weight: 400;
    width: 75vw;
    margin: 20px auto;
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
  /* .delete {
    display: flex;
    /* justify-content: flex-end; */
    /* background-color: transparent; */
    /* color: ${(props) => props.theme.fontColor}; */
    /* font-family: "Josefin Sans", sans-serif; */
    /* &svg { */
      /* color: ${(props) => props.theme.fontColor}; */
    /* } */
  /* } */ 
  div:active {
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};

    font-family: "Josefin Sans", sans-serif;
  }

  @media (min-width: 768px) {
    /* width: 50vw; */

    ul,
    .task-wrapper,
    .task-summary,
    .task-filter {
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
