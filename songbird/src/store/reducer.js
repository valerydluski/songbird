import React from 'react';
export const ContextApp = React.createContext();

export const initialState = {
  answer: {},
  isAnswer: false,
};

export const changeAnswer = (state, action) => {
  switch (action.type) {
    case 'change_answer':
      return {
        ...state,
        ...action.payload,
      };
    case 'change_isAnswer':
      return {
        ...state,
        ...action.payload,
      };
    case 'correct_answer':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
