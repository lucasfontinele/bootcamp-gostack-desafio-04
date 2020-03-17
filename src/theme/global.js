import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 3px;
    }
  }

  html {
    font-size: 10px;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    width: 100%;
    display: block;
    font-weight: 400;
    font-size: 1.5rem;
    background-color: #fff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Helvetica !important;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }
`;

export default GlobalStyle;
