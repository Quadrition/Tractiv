export type ActivityType = "surfing" | "hiking" | "weights" | "spinning";

// TODO: Check if we should calculate name & description from type
export interface Activity {
  type: ActivityType;
  name: string;
  description: string;
}
