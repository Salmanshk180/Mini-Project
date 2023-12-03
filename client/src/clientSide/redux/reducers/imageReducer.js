// imageReducer.js
import {
  ADD_IMAGES,
  SET_IMAGES,
} from "../actions/imageAction";
const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES:
      return {
        ...state,
        images: [...state.images, action.payload.img],
      };
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload.images,
      };

    // You can add additional cases for updating and deleting images if needed
    default:
      return state;
  }
};

export default imageReducer;

