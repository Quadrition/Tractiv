import { View, Text, Pressable } from "react-native";
import { Activity, ActivityType } from "../../types/activity";
import TButton from "../../../../common_components/button";
import React, { useEffect, useMemo, useState } from "react";
import TPicker from "../../../../common_components/picker";
import {
  allActivityTypes,
  availableDurations,
  readableDurations,
} from "./helpers";
import activityService from "../../services/activity.service";
import moment from "moment";
import { Icons, renderIcon } from "../../../../utils/helpers/icons.helper";
import { useNavigation } from "@react-navigation/native";
import ActivityAvatarButton from "../../components/activity-avatar-button";

const ScheduleActivityContainer = () => {
  const [selectedActivityType, setSelectedActivityType] =
    useState<ActivityType>();
  const [selectedDuration, setSelectedDuration] = useState<number>(
    availableDurations[0]
  );
  const [selectedTimeslot, setSelectedTimeslot] = useState<Date>();

  const [scheduledActivities, setScheduledActivities] = useState<Activity[]>(
    []
  );

  const navigation = useNavigation();

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

      navigation.goBack();
    }
  };

  useEffect(() => {
    setSelectedTimeslot(undefined);
  }, [selectedDuration]);

  const availableTimeslots = useMemo<string[]>(() => {
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

          currentTime = currentTime.add(15, "minutes");
        }
      }

      return availableSlots;
    } else {
      return [];
    }
  }, [selectedDuration, scheduledActivities]);

  return (
    <View style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
      <Pressable onPress={() => navigation.goBack()}>
        {renderIcon(Icons.Close)}
      </Pressable>
      <View style={{ display: "flex", gap: 40 }}>
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
              <ActivityAvatarButton
                activityType={activity}
                style={{ width: 60, height: 60 }}
                isSelected={activity === selectedActivityType}
                onPressed={setSelectedActivityType}
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
          onValueChanged={(duration) => {
            if (duration) {
              setSelectedDuration(duration);
            }
          }}
          icon={renderIcon(Icons.Dropdown)}
        />
        <TPicker<string | undefined>
          label="When do you want to do this activity?"
          items={availableTimeslots.map((timeslot) => ({
            label: timeslot,
            value: timeslot,
          }))}
          onValueChanged={(timeslot) =>
            setSelectedTimeslot(
              timeslot
                ? moment(timeslot, "dddd, MMMM Do, h:mm a").toDate()
                : undefined
            )
          }
          placeholder={{
            label: "Pick a date & time or find a free slot",
            value: undefined,
          }}
          icon={renderIcon(Icons.Search)}
        />
      </View>
      <TButton
        type="outlined"
        disabled={
          !selectedDuration || !selectedTimeslot || !selectedActivityType
        }
        onPress={handleScheduleActivity}
      >
        Schedule
      </TButton>
    </View>
  );
};

export default ScheduleActivityContainer;
