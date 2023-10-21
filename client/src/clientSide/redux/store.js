// src/redux/store.js
import { createStore, combineReducers,applyMiddleware } from 'redux';
import modalReducer from './reducers/modalReducer';
import sidebarReducer from './reducers/sidebarReducer';
import moduleReducer from './reducers/moduleReducer';
import headingReducer from './reducers/headingReducer';
import shapeReducer from './reducers/shapeReducer';
import imageReducer from './reducers/imageReducer';
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  module: moduleReducer,
  heading : headingReducer,
  shape : shapeReducer,
  image: imageReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
