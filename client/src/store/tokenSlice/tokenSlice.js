import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    resetToken: (state) => {
      state.value = null;
      console.log(state);
    },
  },
});

export const { setToken, resetToken } = tokenSlice.actions;

export default tokenSlice.reducer;

export const getToken = (state) => state.token.value;
