// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import modalReducer from "./reducers/modalReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import moduleReducer from "./reducers/moduleReducer";
import headingReducer from "./reducers/headingReducer";
import shapeReducer from "./reducers/shapeReducer";
import imageReducer from "./reducers/imageReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import textReducer from "./reducers/textReducer";
import selectedTextReducer from "./reducers/selectedTextReducer";
// import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"; // Defaults to local storage for web
import setActiveComponentReducer from "./reducers/setActiveComponentReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import adminAuthReducer from "./reducers/adminAuthReducer";
const rootReducer = combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer,
  module: moduleReducer,
  heading: headingReducer,
  shape: shapeReducer,
  image: imageReducer,
  auth: authReducer,
  text: textReducer,
  selectedText: selectedTextReducer,
  setActiveComponent: setActiveComponentReducer,
  adminAuth : adminAuthReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export const persistor = persistStore(store);
