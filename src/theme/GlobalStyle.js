import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  html,
  body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: #0a192f;
    color: ${({ theme }) => theme.colors.tertiary.dark.color};
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
  }
`;

export default GlobalStyle;
