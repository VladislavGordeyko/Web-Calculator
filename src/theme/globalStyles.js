import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`\
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    height: 100vh;
    transition: all 0.25s linear;
  };
  
  button {
    background-color: ${({ theme }) => theme.button};
  };
  
  .buttons-container {
    background-color: ${({ theme }) => theme.button};
  };

  .button-functions {
    color: ${({ theme }) => theme.buttonFunctions};
  };

  .button-number {
    color: ${({ theme }) => theme.buttonNumbers};
  };

  .button-operations {
    color: ${({ theme }) => theme.buttonOperations};
  };

  .ReactModal__Body--open {
    overflow: hidden;
    background-color: black;
  }

  .ReactModal__Content--after-open {
    background-color:  ${({ theme }) => theme.button} !important;
  }
  `;

export default GlobalStyles;
