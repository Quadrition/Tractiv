import { useMemo } from "react";
import { Activity, ActivityType } from "../../types/activity";
import moment from "moment";

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
  "spinning",
  "surfing",
  "weights",
  "hiking",
];

export const calculateAvailableTimeslots = (
  selectedDuration: number,
  scheduledActivities: Activity[]
) => {
  return useMemo<string[]>(() => {
    if (selectedDuration) {
      const availableSlots = [];

      // * Get tomorrow's date from 8am
      const now = moment().startOf("day").add(8, "hours");
      const tomorrow = now.clone().add(1, "day");

      // * Iterate over the next 7 days
      for (let i = 0; i < 7; i++) {
        const currentDate = tomorrow.clone().add(i, "day");

        // * Get the start and end of the day
        const startOfDay = currentDate.clone().startOf("day").hour(8);
        const endOfDay = currentDate.clone().endOf("day").hour(22);

        let currentTime = startOfDay.clone();

        // * Iterate over the day in 15 minute intervals
        while (
          currentTime.isBefore(endOfDay) &&
          endOfDay.diff(currentTime, "minutes") >= selectedDuration
        ) {
          const endTime = currentTime.clone().add(selectedDuration, "minutes");

          // * Check if the current time slot is overlapping with any scheduled activities
          const isOverlapping = scheduledActivities.some(
            (activity) =>
              currentTime.isBetween(
                activity.date,
                moment(activity.date).add(activity.durationInMinutes, "minutes")
              ) ||
              endTime.isBetween(
                activity.date,
                moment(activity.date).add(activity.durationInMinutes, "minutes")
              ) ||
              (currentTime.isSameOrBefore(activity.date) &&
                endTime.isSameOrAfter(
                  moment(activity.date).add(
                    activity.durationInMinutes,
                    "minutes"
                  )
                ))
          );

          // * Check if the current time slot is overlapping with any scheduled activities
          if (!isOverlapping) {
            availableSlots.push(currentTime.format("dddd, MMMM Do, h:mm a"));
          }

          currentTime = currentTime.add(selectedDuration, "minutes");
        }
      }

      return availableSlots;
    } else {
      return [];
    }
  }, [selectedDuration, scheduledActivities]);
};
