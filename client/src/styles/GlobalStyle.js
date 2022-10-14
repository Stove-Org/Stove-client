import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    background-color: ${(props) => props.theme.color.grayScale.gray10};
  }

  a {
      text-decoration: none;
      color: black;
    }

`;

export default GlobalStyle;
