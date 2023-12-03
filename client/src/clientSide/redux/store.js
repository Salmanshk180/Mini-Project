// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import modalReducer from "./reducers/modalReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import moduleReducer from "./reducers/moduleReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"; // Defaults to local storage for web
import setActiveComponentReducer from "./reducers/setActiveComponentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import adminAuthReducer from "./reducers/adminAuthReducer";
import userReducer from "./reducers/userReducer";
import headingReducer from "./reducers/headingReducer";
import imageReducer from "./reducers/imageReducer";
import clientImageReducer from "./reducers/clientImageReducer";
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  module: moduleReducer,
  auth: authReducer,
  setActiveComponent: setActiveComponentReducer,
  adminAuth: adminAuthReducer,
  user: userReducer,
  heading: headingReducer,
  image: imageReducer,
  clientImage: clientImageReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Use persistedReducer here
export const store = createStore(
  persistedReducer, // Use persistedReducer instead of rootReducer
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
