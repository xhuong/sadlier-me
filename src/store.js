import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./features/login/loginSlice";

const rootReducer = combineReducers({
  login
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
