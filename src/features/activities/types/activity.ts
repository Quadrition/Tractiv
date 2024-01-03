export type ActivityType = "surfing" | "hiking" | "weights" | "spinning";

export interface Activity {
  type: ActivityType;
  date: Date;
  durationInMinutes: number;
}
