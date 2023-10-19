// src/redux/actions/headingActions.js

export const ADD_SHAPE = 'ADD_SHAPE';

export const addShape = (shape) => {
    return {
      type: ADD_SHAPE,
      payload: shape,
    };
  };
  