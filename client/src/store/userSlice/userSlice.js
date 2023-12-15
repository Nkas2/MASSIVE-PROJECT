import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: null,
      email: null,
      name: null,
      phone_number: null,
      image: null,
      iat: null,
      exp: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = { ...action.payload };
    },
    resetUser: (state) => {
      state.value = {
        email: null,
        name: null,
        phone_number: null,
        image: null,
        iat: null,
        exp: null,
      };
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;

export default userSlice.reducer;
