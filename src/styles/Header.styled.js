import styled from "styled-components";

export const HeaderStyled = styled.div`
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    margin: 25px 30px 5px 30px;
    /* height: 200px; */
  }

  h1 {
    font-size: clamp(1.4rem, 6vw, 2rem);
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  .icon {
    color: ${(props) => props.theme.fontColor};
    font-size: clamp(1.6rem, 2.5vw, 3rem);
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.hoverColor};
      animation: circle 1s forwards;
    }
    &:active {
      transform: scale(0.8);
    }
  }

  @media (min-width: 768px) {
    .title {
      max-width: 80vw;
      /* margin: 30px 30px 5px 30px; */
    }
  }
`;
