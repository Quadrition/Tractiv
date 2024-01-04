import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "../features/activities/state/activity.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type AppDispatch = typeof store.dispatch;
