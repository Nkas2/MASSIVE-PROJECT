import { createSlice } from "@reduxjs/toolkit";

export const clsSlice = createSlice({
  name: "cls",
  initialState: {
    value: true,
  },
  reducers: {
    closed: (state) => {
      state.value = false;
    },
    opened: (state) => {
      state.value = true;
    },
  },
});

export const { closed, opened } = clsSlice.actions;

export default clsSlice.reducer;

export const cls = (state) => state.cls.value;
