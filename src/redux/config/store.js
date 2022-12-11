import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../module/comments";

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
