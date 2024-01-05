import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import activityReducer from "../features/activities/state/activity.slice";

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type AppDispatch = typeof store.dispatch;
