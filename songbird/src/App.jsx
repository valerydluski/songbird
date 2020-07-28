import React, { useReducer } from 'react';
import GlobalStyle from './styles/globalStyles';
import Header from './containers/header/Header';
import Main from './containers/Main/Main';
import { ContextApp, initialState, changeAnswer } from './store/reducer';

export default function App() {
  const [state, dispatch] = useReducer(changeAnswer, initialState);
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main />
      </div>
    </ContextApp.Provider>
  );
}
