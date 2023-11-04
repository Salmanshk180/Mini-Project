// actions.js
export const SET_ACTIVE_COMPONENT = "SET_ACTIVE_COMPONENT";

export const setActiveComponent = (component) => {
  return {
    type: SET_ACTIVE_COMPONENT,
    payload: component,
  };
};
