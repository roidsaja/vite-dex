import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: #060B28;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;

    &::-webkit-scrollbar {
      width: 1rem;               
    }

    &::-webkit-scrollbar-track {
      background: #060B28;        
    }
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
