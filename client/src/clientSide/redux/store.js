// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';
import sidebarReducer from './reducers/sidebarReducer';
import moduleReducer from './reducers/moduleReducer';
import headingReducer from './reducers/headingReducer';
import shapeReducer from './reducers/shapeReducer';
import imageReducer from './reducers/imageReducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  module: moduleReducer,
  heading : headingReducer,
  shape : shapeReducer,
  image: imageReducer,
});

const store = createStore(rootReducer);

export default store;
