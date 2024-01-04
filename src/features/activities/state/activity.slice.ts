import { createSlice } from "@reduxjs/toolkit";
import { ActivityState } from "./types";
import { fetchActivities, insertActivity } from "./activity.thunks";

const initialState: ActivityState = { activities: [] };

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActivities.fulfilled, (state, { payload }) => {
      state.activities = payload;
    });
    builder.addCase(insertActivity.fulfilled, (state, { payload }) => {
      state.activities = [...state.activities, payload];
    });
  },
});

export const activityActions = activitySlice.actions;

export default activitySlice.reducer;
