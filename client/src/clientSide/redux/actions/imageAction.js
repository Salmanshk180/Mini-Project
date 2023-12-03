// imageAction.js
export const ADD_IMAGES = "ADD_IMAGES";

export const addImages = (img) => ({
  type: ADD_IMAGES,
  payload: { img },
});


export const SET_IMAGES = "SET_IMAGES";

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: { images },
});
