// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';
import sidebarReducer from './reducers/sidebarReducer';
import moduleReducer from './reducers/moduleReducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  module: moduleReducer,
  
});

const store = createStore(rootReducer);

export default store;
