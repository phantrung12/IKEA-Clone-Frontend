import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createReducer } from "./reducer";

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
}
const store = configureAppStore();
export const useAppDispatch = () => useDispatch();
