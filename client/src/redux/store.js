// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
