import { View, Text } from "react-native";
import { Activity, ActivityType } from "../../types/activity";
import PrimaryButton from "../../../../common_components/primary-button";
import React, { useEffect, useMemo, useState } from "react";
import TPicker from "../../../../common_components/picker";
import {
  allActivityTypes,
  availableDurations,
  readableDurations,
} from "./helpers";
import activityService from "../../services/activity.service";
import moment from "moment";
import ActivityAvatar from "../../../../common_components/activity-avatar";
import { Icons, renderIcon } from "../../../../utils/helpers/icons.helper";

const ScheduleActivityContainer = () => {
  const [selectedActivityType, setSelectedActivityType] =
    useState<ActivityType>();
  const [selectedDuration, setSelectedDuration] = useState<number>();
  const [selectedTimeslot, setSelectedTimeslot] = useState<Date>();

  const [scheduledActivities, setScheduledActivities] = useState<Activity[]>(
    []
  );

  useEffect(() => {
    fetchScheduledActivities();
  }, []);

  const fetchScheduledActivities = async () => {
    const activities = await activityService.getAllActivities();
    setScheduledActivities(activities);
  };

  const handleScheduleActivity = async () => {
    if (selectedDuration && selectedTimeslot && selectedActivityType) {
      const activity: Activity = {
        type: selectedActivityType,
        date: selectedTimeslot,
        durationInMinutes: selectedDuration,
      };

      await activityService.addActivity(activity);
    }
  };

  const availableTimeslots = useMemo<string[]>(() => {
    if (selectedDuration) {
      const availableSlots = [];
      // * Calculate tommorow's 8am
      const currentDate = moment().startOf("day").add(1, "day").hour(8);

      // * Iterate through the next 7 days
      for (let i = 0; i < 7; i++) {
        let currentTime = currentDate.clone();
        const endOfDay = currentDate.clone().endOf("day").hour(22);

        while (currentTime.isBefore(endOfDay)) {
          const endTime = currentTime.clone().add(selectedDuration, "minutes");

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

          if (!isOverlapping) {
            availableSlots.push(currentTime.format("dddd, MMMM Do, h:mm a"));
          }

          currentTime = endTime;
        }

        currentDate.add(1, "day");
      }

      return availableSlots;
    } else {
      return [];
    }
  }, [selectedDuration, scheduledActivities]);

  // TODO: Check X button
  return (
    <View style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
      <View />
      <View style={{ display: "flex", gap: 40, alignItems: "stretch" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            letterSpacing: 0,
            color: "white",
          }}
        >
          Schedule your activity
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {allActivityTypes.map((activity) => (
            <View
              style={{ display: "flex", gap: 8, alignItems: "center" }}
              key={activity}
            >
              <ActivityAvatar
                style={{ width: 60, height: 60 }}
                activityType={activity as ActivityType}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  textTransform: "uppercase",
                }}
              >
                {activity}
              </Text>
            </View>
          ))}
        </View>
        <TPicker<number>
          label="How long do you want to do this activity?"
          items={availableDurations.map((duration) => ({
            label: readableDurations[duration],
            value: duration,
          }))}
          onValueChanged={setSelectedDuration}
          icon={renderIcon(Icons.Dropdown)}
        />
        <TPicker<string | undefined>
          label="When do you want to do this activity?"
          items={availableTimeslots.map((timeslot) => ({
            label: timeslot,
            value: timeslot,
          }))}
          onValueChanged={(timeslot) =>
            setSelectedTimeslot(moment(timeslot).toDate())
          }
          placeholder={{
            label: "Pick a date & time or find a free slot",
            value: undefined,
          }}
          icon={renderIcon(Icons.Search)}
        />
      </View>
      <PrimaryButton
        disabled={
          !selectedDuration || !selectedTimeslot || !selectedActivityType
        }
        onPress={handleScheduleActivity}
      >
        Schedule
      </PrimaryButton>
    </View>
  );
};

export default ScheduleActivityContainer;
