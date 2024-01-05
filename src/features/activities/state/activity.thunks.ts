import { createAsyncThunk } from "@reduxjs/toolkit";

import { Activity } from "../types/activity";
import activityService from "../services/activity.service";

export const fetchActivities = createAsyncThunk(
  "activities/fetch",
  async () => {
    const activities = await activityService.getAllActivities();
    return activities;
  }
);

export const insertActivity = createAsyncThunk(
  "activities/insert",
  async (activity: Activity) => {
    await activityService.addActivity(activity);
    return activity;
  }
);
