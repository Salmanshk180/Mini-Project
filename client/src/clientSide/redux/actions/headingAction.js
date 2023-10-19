// src/redux/actions/headingActions.js

export const ADD_HEADING1 = 'ADD_HEADING1';

export const addHeading1 = (text) => {
    return {
      type: ADD_HEADING1,
      payload: text,
    };
  };
  