import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice/tokenSlice";
import userReducer from "./userSlice/userSlice";
import clsSlice from "./cls/cslSlice";
import clsSlice2 from "./cls/csl2Slice";
import rfSlice from "./rf";
import activity from "./activity/activitySlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    cls: clsSlice,
    clsas: clsSlice2,
    rf: rfSlice,
    activity: activity,
  },
});
