export const ADD_CLIENT_IMAGES = "ADD_CLIENT_IMAGES";
export const addClientImages = (img) => ({
  type: ADD_CLIENT_IMAGES,
  payload: { img },
});

export const SET_IMAGES = "SET_IMAGES";

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: { images },
});
