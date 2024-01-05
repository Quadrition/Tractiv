import { Activity } from "../../types/activity";

export interface GroupedActivities {
  [key: string]: Activity[];
}
