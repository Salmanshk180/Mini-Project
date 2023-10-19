
export const ADD_IMAGE = 'ADD_IMAGE';

export const addImage = (image) => {
    return {
      type: ADD_IMAGE,
      payload: image,
    };
  };
  