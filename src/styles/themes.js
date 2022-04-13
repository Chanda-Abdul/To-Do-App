import { createGlobalStyle } from "styled-components";

// export const viewport = {
//   mobile: "375px",
//   tablet: "768px",
//   desktop: "1275px",
// };

export const lightTheme = {
  body:"hsl(236, 33%, 92%)", 
  backgroundColor: "hsl(0, 0%, 98%)",
  fontColor: "hsl(235, 19%, 35%)",
  borderColor: "hsl(233, 11%, 84%)",
  hoverColor: "hsl(236, 33%, 92%)",
  contentColor: "hsl(233, 11%, 84%)",
  summaryColor: "hsl(236, 9%, 61%)",
  completedColor: "hsl(236, 33%, 92%)",
  outlineColor: "hsl(220, 98%, 61%)",
  gradientBackground: "linear-gradient(135deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%)100%)",
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
  backgroundColor: "hsl(235, 24%, 19%)",
  fontColor: "hsl(234, 39%, 85%)",
  borderColor: "hsl(237, 14%, 26%)",
  hoverColor: "hsl(236, 33%, 92%)",
  contentColor: "hsl(234, 11%, 52%)",
  summaryColor: "hsl(233, 14%, 35%)",
  completedColor: "hsl(234, 39%, 85%)",
  outlineColor: "hsl(220, 98%, 61%)",
  shadowColor: "hsl(235, 24%, 19%)",
  gradientBackground: "linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  
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
    min-height: 100vh;

    transition: 1s ease-in-out;
}


ul{
  list-style: none;
}

h1, h2, h3 h4, h5, h6 {
    font-family: 'Josefin Sans', sans-serif;
   
    font-weight: 700;
}

.drag-message{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  font-weight: 400;
  font-size: .75em;
  color: ${(props) => props.theme.summaryColor};
  letter-spacing: -0.25px;
  margin: 3em auto;

    background-color: transparent;
    
    transition: 1s ease;
 
}
.attribution {
  position: static;
  display: flex;
  
  padding: 10px;
  text-align: center;
  font-size: .75em;
  font-weight: 200;
  width: 100%;
  bottom: 0;
  line-height: .25em;
  /* margin: 1em; */
  /* flex-direction: column; */
  justify-content: center;
   background-color: transparent;
  color: ${(props) => props.theme.summaryColor};
  a {
    color: ${(props) => props.theme.outlineColor};
  }
  & p {
   
  }
  > h3 {
    letter-spacing: .4px; 
    opacity: 1;
  }
}

@media (min-width: 768px) {
  body{
    font-size:20px;
  }
    
  }

  @media (min-width: 1275px) {
  body{
    font-size:28px;
  }
    
  }
`;
