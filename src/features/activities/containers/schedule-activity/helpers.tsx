import { ActivityType } from "../../types/activity";

export const readableDurations: { [key: string]: string } = {
  15: "15 m",
  30: "30 m",
  45: "45 m",
  60: "1 h",
  90: "1h 30m",
  120: "2h",
  180: "2h 30m",
};

export const availableDurations = [15, 30, 45, 60, 90, 120, 180];

export const allActivityTypes: ActivityType[] = [
  "surfing",
  "hiking",
  "weights",
  "spinning",
];
