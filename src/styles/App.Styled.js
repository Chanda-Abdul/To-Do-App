import styled from "styled-components";

export const AppStyled = styled.div`
  background-image: url(${(props) => props.theme.imageMobile});
  background-repeat: none;
  position: absolute;
  top: 0;
  height: 200px;
  width: 100%;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.theme.imageDesktop});
  }
`;