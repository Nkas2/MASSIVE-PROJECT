import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice/tokenSlice";
import userReducer from "./userSlice/userSlice";
import clsSlice from "./cls/cslSlice";
import clsSlice2 from "./cls/csl2Slice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    cls: clsSlice,
    clsas: clsSlice2,
  },
});
