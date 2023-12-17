import { createSlice } from "@reduxjs/toolkit";

export const clsSlice2 = createSlice({
  name: "clsas",
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

export const { closed, opened } = clsSlice2.actions;

export default clsSlice2.reducer;

export const clssa = (state) => state.clsas.value;
