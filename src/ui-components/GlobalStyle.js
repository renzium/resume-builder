import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    background-color: #ccc;
  }
`;

export default GlobalStyle;
