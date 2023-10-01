// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';
import sidebarReducer from './reducers/sidebarReducer';
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  
});

const store = createStore(rootReducer);

export default store;
