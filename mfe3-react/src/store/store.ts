// src/store.js
import { configureStore, createAction } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const setTheme = createAction("SET_THEME");

const initialState = {
  user: null,
  theme: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer,
});
