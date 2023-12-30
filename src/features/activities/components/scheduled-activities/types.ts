import { Activity } from "../../domain/activity";

export interface GroupedActivities {
  [key: string]: Activity[];
}
