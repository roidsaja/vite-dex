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
    font-family: 'Open sans', sans-serif;

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

  button {
    font-family: 'Open sans', sans-serif;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .main-container {
    max-width: 78rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  
  .button {
    background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
    border: 1px solid #24293f;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    font-size: 1rem;
    line-height: 150%;
    font-weight: 700;
    color: #ffffff;
  }
`;

export default GlobalStyles;
