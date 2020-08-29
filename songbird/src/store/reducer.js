import React from 'react';
import birdsData from '../data/data';
import shuffleArray from '../utils/shuffleArray';
export const ContextApp = React.createContext();

export const initialState = {
  answer: {},
  isAnswer: false,
  level: 0,
  isCorrect: false,
  correctAnswer: shuffleArray(birdsData[0])[0],
  countAnswer: 5,
  score: 0,
  isPause: false,
};

export const changeAnswer = (state, action) => {
  switch (action.type) {
    case 'change_answer':
      return {
        ...state,
        ...action.payload,
      };
    case 'isPause':
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
    case 'change_level':
      return {
        ...state,
        ...action.payload,
      };
    case 'isCorrect':
      return {
        ...state,
        ...action.payload,
      };
    case 'change_count_answer':
      return {
        ...state,
        ...action.payload,
      };
    case 'change_score':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
