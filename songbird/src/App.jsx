import React, { useReducer } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer
          className="toast-container"
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </ContextApp.Provider>
  );
}
