# Frontend Mentor - [Todo app Solution](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)

![Design preview for the Todo app Solution coding challenge](./design/desktop-preview.jpg)

## Summary

This is a solution to the [Frontend Mentor](https://www.frontendmentor.io) challenge to recreate the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
<!-- 
I built this project to practice my <b>React</b> skills. -->

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
### Users should be able to:
- [ ] View the optimal layout for each page depending on their device's screen size
  - [ ] Mobile First
  - [ ] Tablet
  - [ ] Desktop
- [ ] See hover states for all interactive elements throughout the page
  <!-- - [ ] Buttons
  - [ ] Social Media Icons -->
- [x] Add new todos to the list
- [ ] Mark todos as complete
- [x] Delete todos from the list
- [ ] Filter by all/active/complete todos
- [x] Clear all completed todos
- [x] Toggle light and dark mode
- [ ] **Bonus**: Drag and drop to reorder items on the list
- [ ] **Bonus**: Build this project as a full-stack application
<!-- Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin  -->
## Screenshots
<!-- 
### Desktop

<!-- #### Mobile
##### `<Home/>`
<img src="./screens/mobile1-1.png" alt="" width="200"/>
<img src="./screens/mobile1-2.png" alt="" width="200"/>
<img src="./screens/mobile1-3.png" alt="" width="200"/>
<img src="./screens/mobile1-4.png" alt="" width="200"/>
<img src="./screens/mobile1-5.png" alt="" width="200"/>
##### `<Location/>` with  [Leaflet JS](https://leafletjs.com/) Map
<img src="./screens/mobile2-1.png" alt="" width="200"/>
<img src="./screens/mobile2-2.png" alt="" width="200"/>
<img src="./screens/mobile2-3.png" alt="" width="200"/> -->

<!-- #### Tablet
<img src="./screens/tablet1.png" alt="" width="200"/>
<img src="./screens/tablet2.png" alt="" width="200"/>
<img src="./screens/tablet3.png" alt="" width="200"/>
<img src="./screens/tablet4.png" alt="" width="200"/> -->

<!-- ### `<Home/>`

<img src="./screens/desktop1.png" alt="" width="600"/>
<img src="./screens/desktop2.png" alt="" width="600"/>
<img src="./screens/desktop3.png" alt="" width="600"/>
<img src="./screens/desktop4.png" alt="" width="600"/> -->

<!-- ### `<Location/>` with [Leaflet JS](https://leafletjs.com/) Map

<img src="./screens/desktop5.png" alt="" width="600"/>
<img src="./screens/desktop6.png" alt="" width="600"/>  -->

## Links

<!-- - <b>Solution URL:</b> [View Solution here](https://www.frontendmentor.io/solutions/modern-art-gallery-w-react-styled-components-leafletjs-and-sass-siAf_gMZ8)
- <b>Live Site URL:</b> [View live site here](https://friendly-benz-de5b74.netlify.app/) -->

## My process

### Built with

<!-- - <b>[React](https://reactjs.org/)</b> - JavaScript Framework
- <b>[React Styled Components](https://styled-components.com/)</b> - For styles
- <b>[Leaflet JS](https://leafletjs.com/)</b> - Interactive Map Library
- <b>Sass/CSS</b>
- <b>Flexbox</b>
- <b>Mobile-first workflow</b>
  - Mobile breakpoint: 375px
  - Tablet beakpoint: 768px
  - Desktop breakpoint: 1275px -->

### What I learned

<!-- - This is my first project using [React Styled Components](https://styled-components.com/). I started building this project, and once I came to the `<Footer/>` I realized that the `background-color` and the font `color` of the footer would change depending on which page is being rendered.  So I did some research and <b>Styled Components</b> are a great solution for this issue. Overall, I really enjoyed working with <b>Styled Components</b> because they helped me organize my <b>CSS</b> styles, and quickly incorporate <b>responsive media queries</b>.
    - I used `props` to send `background-color` and font `color` to the `<Footer/>`. Also, figuring out how to conditionally change the color of an `<svg/>` with `props` was extremely challenging😣.
    
    <b>in `<Footer/>`</b>
    ````
    <FooterStyled
        bgcolor={props.bgcolor}
        color={props.color}
        activecolor={props.activeColor}
      >
    ````

    in the <b>parent component</b>

    ````
    <Footer 
      bgcolor="var(--almost-black)" 
      color="var(--white)" 
      activeColor="var(--gold)"
    />
    ````
    and the <b>styled component</b>
    ````
    background-color: ${({ bgcolor }) => 
      bgcolor || "var(--almost-black)"};
    color: ${({ color }) => 
      color || "var(--white)"};
    ````

    <b>`<Footer/>` in the `<Home/>` component</b>

    <img src="./screens/mobile1-5.png" alt="" width="300"/>

    <b>`<Footer/>` in the `<Location/>` component</b>

    <img src="./screens/mobile2-3.png" alt="" width="300"/>

- This is also one of the first projects where I used <b>Sass</b>. <b>Sass</b> is great, because it allows you to create resuable variables for fonts, colors, etc.

  The given <b>Figma</b> specs for colors

  <img src="./screens/colors.png" alt="" />
    
  And the <b>Sass/CSS</b> I came up with

    ````
    :root {
    /* color palette */
    --gold: hsl(24, 56%, 63%);
    --almost-black: hsl(0, 0%, 8%);
    --almost-grey: hsl(0, 0%, 27%);
    --white: hsl(0, 0%, 100%);
    }
    ````
   and I incorporated these colors into the <b>Styled Components</b> using
    ````
    color: var(--gold);
    color: var(--almost-black);
    color: var(--almost-grey);
    color: var(--white);
    ````
    
    The given <b>Figma</b> specs for fonts

  <img src="./screens/fonts.png" alt="" />

    And the <b>Sass/CSS</b> I came up with

    ````
    /* fonts */
    @mixin heading-xl {
    font-family: "Big Shoulders Display", cursive;
    font-size: 96px;
    line-height: 88px;
    text-transform: uppercase;
    }
    @mixin heading-l {
    font-family: "Big Shoulders Display", cursive;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    }
    @mixin heading-m {
    font-family: "Big Shoulders Display", cursive;
    font-size: 60px;
    line-height: 50px;
    text-transform: uppercase;
    }
    @mixin heading-s {
    font-family: "Big Shoulders Display", cursive;
    font-size: 36px;
    line-height: 36px;
    text-transform: uppercase;
    }
    @mixin body-m {
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    }
    @mixin body-s {
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    }

    /* mobile */
    .title {
    @include heading-m;
    }
    ````
- I also played around with active states and stylings for the `<Button/>` 

  <b>Inactive</b>

  <img src="./screens/button1.png" alt="" width="200"/>

  <b>Active</b>

  <img src="./screens/button2.png" alt="" width="200"/> -->

## Continued development

<!-- - [ ] I would like to review the Social Media Icon active state color changes, they don't seem to be working at the moment. 
- [ ] Maybe add some additional pages. -->

## Useful resources
- [React JS Tutorial | Dark Mode Toggle Using Styled Components](https://www.youtube.com/watch?v=G00V4tRx1ME&t=373s)
- [Styled Components Crash Course](https://www.youtube.com/watch?v=02zO0hZmwnw)
- [What is Firebase? The complete story, abridged.](https://medium.com/firebase-developers/what-is-firebase-the-complete-story-abridged-bcc730c5f2c0)
<!-- - [React JS Tutorial | Dark Mode Toggle Using Styled Components](https://www.youtube.com/watch?v=G00V4tRx1ME&t=373s) -->

<!-- - [StackOverflow](https://stackoverflow.com/) - This project would not be possible without <b>StackOverflow</b>. 🤣
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) - MDN was a great reasource for whatever <b>CSS</b> issues I encountered. -->

## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)


<!-- TO-DO
- hover states
- mobile styles
- tablet styles
- desktop styles
- filter 
  all
  active
  complete
- clear list
- mark complete
- delete
- drag drop w dnd react
- how long will firebase persist?

 -->

