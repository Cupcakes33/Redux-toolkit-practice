import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.num++;
    },
    decrease: (state) => {
      state.num--;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
