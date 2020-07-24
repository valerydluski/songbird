import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './containers/header/Header';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}
