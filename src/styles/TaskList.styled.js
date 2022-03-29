import styled from "styled-components";

export const TaskListStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.contentColor};
  font-weight: 200;
.task-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 540px;
    margin-top: 25px;
    border-radius: 5px;
    min-height: 300px;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.contentColor};
    box-shadow: ${(props) => props.theme.borderColor};

}

.listed-task{
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    letter-spacing: -0.25px;
    color: ${(props) => props.theme.fontColor};
    border-bottom: ${(props) => props.theme.borderColor};
    &.completed {
        color: ${(props) => props.theme.completedColor};
        text-decoration: line-through;
    }
    &:first-of-type{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
}

.task-complete-wrapper{
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
    max-width: 80vw;
    padding: 20px;
    /* width: 24px;
    height: 24px; */
    
}
.task-complete{
    /* display: inline-block; */
    border-radius: 50%;
    margin-right: 10px;
    height: 24px;
    width: 24px;
    background: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%));
}

.check-gradient{
    background: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%));

}
  .task-summary{
    display: flex;
  /* flex-direction: row; */
  padding: 20px;
  justify-content: space-between;
  align-items: center;  
  color: ${(props) => props.theme.summaryColor};
  font-weight: 200;
  }

  .task-filter{
    display: flex;
    width: 160px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  color: ${(props) => props.theme.summaryColor};
  font-weight: 400;
  }
`;
