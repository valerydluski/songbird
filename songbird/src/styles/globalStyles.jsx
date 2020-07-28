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

  .rhap_current-time,
  .rhap_total-time,
  .rhap_main-controls-button,
  .rhap_repeat-button,
  .rhap_volume-button,
  .rhap_progress-indicator,
  .rhap_progress-filled {
    color: #fff;
  }


`;

export default GlobalStyle;
