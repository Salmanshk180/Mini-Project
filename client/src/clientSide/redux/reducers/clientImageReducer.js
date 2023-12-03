import { ADD_CLIENT_IMAGES,SET_IMAGES } from "../actions/clientImageAction";

const initialState = {
    images: [],
  };
  
  const clientImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CLIENT_IMAGES:
        return {
          ...state,
          images: [...state.images, action.payload.img],
        }
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
  
  export default clientImageReducer;
  