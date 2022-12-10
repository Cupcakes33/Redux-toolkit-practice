import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
