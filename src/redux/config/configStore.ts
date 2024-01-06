import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";
const rootReducer = combineReducers({
  authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default store;
