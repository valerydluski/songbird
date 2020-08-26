import { createGlobalStyle } from 'styled-components';
import { LINK_FOR_IMG } from '../config';

const GlobalStyle = createGlobalStyle`
  body, html, #root, .App{
    min-height: 100vh;
    min-width: 100%;
    margin: 0 auto;
  }

  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    background-image: url(${LINK_FOR_IMG}bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-shadow: white 1px 1px 0, white -1px -1px 0,
    white -1px 1px 0, white 1px -1px 0;
  }

  .react-audio-player  {
    background-color: #6550de;
    padding: 0.5rem;
    border-radius: 10px;
    outline: none;
    width: 80%;
  }

  .toast-container {
    font-size: 22px;
    text-shadow: none;
  }

  body {
    background-color: rgba(161,21,207, 0.3);

  }
`;

export default GlobalStyle;
