// src/redux/actions.js
export const SELECT_MODULE = 'SELECT_MODULE';

export const selectModule = (module) => {
    return {
      type: SELECT_MODULE,
      payload: module,
    };
  };
  