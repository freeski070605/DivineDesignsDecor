import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial, sans-serif';
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
