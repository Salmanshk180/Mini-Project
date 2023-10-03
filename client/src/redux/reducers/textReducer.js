// src/redux/featuresReducer.js
import { ADD_TEXT } from "../actions/textAction";
const initialState = {
    texts: [],
  };
  
  export function textReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TEXT':
        return {
          ...state,
          texts: [...state.texts, action.payload],
        };
      case 'UPDATE_TEXT':
        const { index, newText } = action.payload;
        const updatedTexts = [...state.texts];
        updatedTexts[index] = newText;
        return {
          ...state,
          texts: updatedTexts,
        };
      default:
        return state;
    }
  }