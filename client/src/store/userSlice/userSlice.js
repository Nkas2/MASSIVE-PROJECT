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
      state.value = action.payload;
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
    setNameAndPhoneNumber: (state, action) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        name: action.payload.name,
        phone_number: action.payload.phone_number,
      };
    },
    setImage: (state, action) => {
      console.log(action.payload);
      state.value = {
        ...state.value,
        image: action.payload,
      };
    },
  },
});

export const { resetUser, setUser, setNameAndPhoneNumber, setImage } =
  userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user.value;
