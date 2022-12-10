import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  diff: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.number++;
    },
    min: (state, action) => {
      state.number--;
    },
    changeDiff: (state, action) => {
      state.diff = parseInt(action.payload, 10);
    },
    addAmount: (state, action) => {
      state.number += state.diff;
      state.diff = 0;
    },
    minAmount: (state, action) => {
      state.number -= state.diff;
      state.diff = 0;
    },
  },
});

export const { add, min, changeDiff, addAmount, minAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
