import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increaseBy5: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, reset, increaseBy5 } =
  counterSlice.actions;

export default counterSlice.reducer;
