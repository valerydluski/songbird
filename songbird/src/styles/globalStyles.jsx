import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root, .App{
    height: 100%;
    min-height: 100vh;
    min-width: 100%;
    margin: 0 auto;
  }

  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    background: #E5E5E5;
  }

  .react-audio-player  {
    background-color: #6550de;
    padding: 0.5rem;
    border-radius: 10px;
    outline: none;
    width: 80%;
    color: #6550de;
  }

  .toast-container {
    font-size: 22px;
  }
`;

export default GlobalStyle;
