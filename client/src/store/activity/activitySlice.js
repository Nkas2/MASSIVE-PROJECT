import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    value: [],
  },
  reducers: {
    res: (state) => {
      state.value = [];
    },
    set: (state, actions) => {
      actions.payload?.forEach((element) => {
        if (element.remind === 1) {
          state.value.push(element);
        }
      });
    },
  },
});

export const { set, res } = activitySlice.actions;

export default activitySlice.reducer;

export const activity = (state) => state.activity.value;
