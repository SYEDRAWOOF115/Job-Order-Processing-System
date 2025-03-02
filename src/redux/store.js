import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
