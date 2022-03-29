import { createGlobalStyle } from "styled-components";

// export const viewport = {
//   mobile: "375px",
//   tablet: "768px",
//   desktop: "1275px",
// };

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  fontColor: "hsl(235, 19%, 35%)",
  borderColor: "hsl(235, 19%, 35%)",
  hoverColor: "hsl(236, 33%, 92%)",
  contentColor: "hsl(233, 11%, 84%)",
  summaryColor: "hsl(236, 9%, 61%)",
  completedColor: "hsl(236, 33%, 92%)",
  outlineColor: "hsl(220, 98%, 61%)",
  shadowColor: "hsl(233, 11%, 84%)",
  imageMobile: "./images/bg-mobile-light.jpg",
  imageDesktop: "./images/bg-desktop-light.jpg",
  // $brightBlue: hsl(220, 98%, 61%);
  // $lightThemeVeryLightGray: hsl(0, 0%, 98%);
  // $lightThemeVeryLightGrayishBlue: hsl(236, 33%, 92%);
  // $lightThemeLightGrayishBlue: hsl(233, 11%, 84%);
  // $lightThemeDarkGrayishBlue: hsl(236, 9%, 61%);
  // $lightThemeVeryDarkGrayishBlue: hsl(235, 19%, 35%);
};

export const darkTheme = {
  body: "hsl(235, 21%, 11%)",
  fontColor: "hsl(234, 39%, 85%)",
  borderColor: "hsl(237, 14%, 26%)",
  hoverColor: "hsl(236, 33%, 92%)",
  contentColor: "hsl(234, 11%, 52%)",
  summaryColor: "hsl(233, 14%, 35%)",
  completedColor: "hsl(234, 39%, 85%)",
  outlineColor: "hsl(220, 98%, 61%)",
  shadowColor: "hsl(234, 11%, 52%)",
  imageMobile: "./images/bg-mobile-dark.jpg",
  imageDesktop: "./images/bg-desktop-dark.jpg",
  // $darkThemeVeryDarkBlue: hsl(235, 21%, 11%);
  // $darkThemeVeryDarkDesaturatedBlue: hsl(235, 24%, 19%);
  // $darkThemeLightGrayishBlue: hsl(234, 39%, 85%);
  // //  $darkThemelightGrayishBlue (hover): hsl(236, 33%, 92%);
  // $darkThemeDarkGrayishBlue: hsl(234, 11%, 52%);
  // $darkThemeVeryDarkGrayishBlue: hsl(233, 14%, 35%);
  // $darkThemeVeryDarkGrayishBlue: hsl(237, 14%, 26%);
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    font-size:18px;
    /* min-height: 100vh; */
    transition: 1s ease;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    /* min-height: 100vh; */
    color: ${(props) => props.theme.fontColor};
}

.content{
    width: 90%;
    max-width: 500px;
    margin-top: 7vw;
   
}
ul{
  list-style: none;
}

button, li {
  outline-color: ${(props) => props.theme.outlineColor};
}

p {
    font-family: 'Josefin Sans', sans-serif;
    /* font-weight: 400; */
    font-size: 18px;
}

h1, h2, h3 h4, h5, h6 {
    font-family: 'Josefin Sans', sans-serif;
    /* font-weight: 700; */
}

.attribution {
  position: fixed;
  padding: 0 10px;
  text-align: center;
  font-size: 10px;
  /* font-weight: 200; */
  width: 100vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px -5px 5px ${(props) => props.theme.shadowColor};;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  a {
    color: ${(props) => props.theme.outlineColor};
  }
  > h3 {
    letter-spacing: .4px; 
    opacity: 1;
  }
 
}
`;
