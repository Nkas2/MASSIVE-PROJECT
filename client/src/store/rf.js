import { createSlice } from "@reduxjs/toolkit";

export const rfSlice = createSlice({
  name: "rf",
  initialState: {
    value: 0,
  },
  reducers: {
    change: (state) => {
      state.value = Math.random();
    },
  },
});

export const { change } = rfSlice.actions;

export default rfSlice.reducer;

export const rf = (state) => state.rf.value;
