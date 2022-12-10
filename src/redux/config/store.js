import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../module/commentsSlice";

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
