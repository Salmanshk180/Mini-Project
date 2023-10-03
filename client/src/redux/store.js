// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';
import sidebarReducer from './reducers/sidebarReducer';
import moduleReducer from './reducers/moduleReducer';
import { textReducer } from './reducers/textReducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  module: moduleReducer,
  text:textReducer,
  
});

const store = createStore(rootReducer);

export default store;
