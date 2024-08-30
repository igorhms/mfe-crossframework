// src/store.js
import { createStore } from "redux";

const initialState = {
  user: 'Igor Silva',
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

export const store = createStore(reducer);
