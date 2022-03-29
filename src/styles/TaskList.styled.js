import styled from "styled-components";

export const TaskListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.contentColor};
  font-weight: 200;
  max-width: 80vw;
  padding: 0 5px;
  margin: auto auto 0 auto;
  
.task-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  align-items: center;
    /* justify-content: space-between; */
    /* padding: 5px; */
    max-width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    min-height: 300px;
    outline: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.contentColor};
    /* review box shadow */
    box-shadow: 10px ${(props) => props.theme.borderColor};
}

ul {
  display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  align-items: baseline;
  /* font-size: 12px; */
  margin: 10px 5px;
  padding: 0;
}

li {
  display: flex;
    flex-direction: row;
     justify-content: space-evenly;
     /* width: 100%; */
     align-items: stretch;
     padding: 5px 20px;
    margin: 0;
}

.listed-task{
  outline: ${(props) => props.theme.fontColor};
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* max-width: 100%; */
/* font-size: 12px; */
    /* position: relative; */
    cursor: pointer;
    /* width: 100%; */
  padding: 5px;
    margin: auto 0;
    letter-spacing: -0.25px;
    color: ${(props) => props.theme.fontColor};
    border-bottom: ${(props) => props.theme.borderColor};
    
    /* &:first-of-type{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    } */
}
.completed {
        color: ${(props) => props.theme.completedColor};
        text-decoration: line-through;
    }
/* .task-complete-wrapper{
    
    width: 1em;
    height: 1em; 
    
} */
.task-complete{
    /* display: inline-block; */
    border-radius: 50%;
    margin: 0 10px 0 0;
    height: 1em;
    width:1em;
    border-image-source: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%));
}

.check-gradient{
  border-radius: 50%;
    margin: 0 10px 0 0;
    height: 1em;
    width:1em;
  
  border-image-source: linear-gradient(135deg, hsl(192, 100%, 67%),hsl(280, 87%, 65%));

}
  .task-summary{
    display: flex;
  flex-direction: row;
  padding: 5px;
  width: 80%;
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
  width: 80%;
  }

  button{
    background-color: transparent;
    color: ${(props) => props.theme.summaryColor};
    font-family: 'Josefin Sans',sans-serif;
  }
  button:active{
    background-color: transparent;
    color: ${(props) => props.theme.outlineColor};
    
    font-family: 'Josefin Sans',sans-serif;
  }
  @media (min-width: 768px) {
    
      /* height: 3em; */
      ul, .task-summary{
        width: 50vw;
      }
      
      
  
  }
`;
