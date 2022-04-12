import styled from "styled-components";

export const HeaderStyled = styled.div`
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    margin: 25px auto 5px auto;
    padding: 0 10vw;
    color: hsl(0, 0%, 98%);
  }

  h1 {
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    font-weight: 700;
  }

  .icon {
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.hoverColor};
      /* animation: circle 1s forwards; */
    }
    &:active {
      transform: scale(0.8);
    }
  }

  @media (min-width: 768px) {
    .title {
      width: 50vw;
      margin: 25px auto 5px auto;
    }
  }
`;
