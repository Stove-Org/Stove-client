import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import userSlice from "./userSlice";
import modalSlice from "./modalSlice";
import progamersSlice from "./progamersSlice";
import newsSlice from "./newsSlice";
import rostersSlice from "./rostersSlice";

const reducers = combineReducers({
  user: userSlice.reducer,
  modal: modalSlice.reducer,
  progamers: progamersSlice.reducer,
  news: newsSlice.reducer,
  rosters: rostersSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
