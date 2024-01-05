import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Icons, renderIcon } from "../../../../utils/helpers/icons.helper";
import TButton from "../../../../common_components/button";
import TPicker from "../../../../common_components/picker";
import ActivityAvatarButton from "../../components/activity-avatar-button";
import { RootState, useAppDispatch } from "../../../../store";
import { insertActivity } from "../../state/activity.thunks";
import { appColors } from "../../../../utils/constants/colors";
import {
  allActivityTypes,
  availableDurations,
  calculateAvailableTimeslots,
  readableDurations,
} from "./helpers";
import { Activity, ActivityType } from "../../types/activity";

const ScheduleActivityContainer = () => {
  const [selectedActivityType, setSelectedActivityType] =
    useState<ActivityType>();
  const [selectedDuration, setSelectedDuration] = useState<number>(
    availableDurations[0]
  );
  const [selectedTimeslot, setSelectedTimeslot] = useState<Date>();

  const scheduledActivities = useSelector(
    (state: RootState) => state.activity.activities
  );
  const availableTimeslots = calculateAvailableTimeslots(
    selectedDuration,
    scheduledActivities
  );

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleScheduleActivity = async () => {
    if (selectedDuration && selectedTimeslot && selectedActivityType) {
      const activity: Activity = {
        type: selectedActivityType,
        date: selectedTimeslot,
        durationInMinutes: selectedDuration,
      };

      dispatch(insertActivity(activity));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        {renderIcon(Icons.Close)}
      </Pressable>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Schedule your activity</Text>
        <View style={styles.activityTypes}>
          {allActivityTypes.map((activity) => (
            <View style={styles.activityType} key={activity}>
              <ActivityAvatarButton
                activityType={activity}
                style={styles.activityButton}
                isSelected={activity === selectedActivityType}
                onPressed={setSelectedActivityType}
              />
              <Text style={styles.activityText}>{activity}</Text>
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  mainContainer: {
    display: "flex",
    gap: 40,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0,
    color: appColors.snow,
    fontFamily: "Europa Bold",
  },
  activityTypes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  activityType: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  activityButton: {
    width: 60,
    height: 60,
  },
  activityText: {
    color: appColors.snow,
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "Rift Soft",
    letterSpacing: 2.1,
  },
});

export default ScheduleActivityContainer;
