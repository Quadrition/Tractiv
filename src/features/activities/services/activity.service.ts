import AsyncStorage from "@react-native-async-storage/async-storage";
import { Activity } from "../types/activity";

class ActivityService {
  async addActivity(activity: Activity) {
    try {
      const activities = await this.getAllActivities();

      await AsyncStorage.setItem(
        "activities",
        JSON.stringify([...activities, activity])
      );
    } catch (e) {
      console.error("Error storing activity", e);
    }
  }

  async getAllActivities(): Promise<Activity[]> {
    try {
      const activities = await AsyncStorage.getItem("activities");

      return activities
        ? JSON.parse(activities).map((activity: Activity) => ({
            type: activity.type,
            date: new Date(activity.date),
            durationInMinutes: activity.durationInMinutes,
          }))
        : [];
    } catch (e) {
      console.error("Error reading activities", e);
      return [];
    }
  }
}

export default new ActivityService();
