import styled from "styled-components";

export const StyledApp = styled.div`
  background-image: url(${(props) => props.theme.imageMobile});
  background-repeat: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: left;

  @media (min-width: 376px) {
    background-image: url(${(props) => props.theme.imageDesktop});
    height: 300px;
  }
`;
