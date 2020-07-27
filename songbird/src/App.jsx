import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './containers/header/Header';
import Main from './containers/Main/Main';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}
