import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice/tokenSlice";
import userReducer from "./userSlice/userSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});
