import { View, Text, Pressable } from "react-native";
import { Activity, ActivityType } from "../../types/activity";
import TButton from "../../../../common_components/button";
import React, { useState } from "react";
import TPicker from "../../../../common_components/picker";
import {
  allActivityTypes,
  availableDurations,
  calculateAvailableTimeslots,
  readableDurations,
} from "./helpers";
import moment from "moment";
import { Icons, renderIcon } from "../../../../utils/helpers/icons.helper";
import { useNavigation } from "@react-navigation/native";
import ActivityAvatarButton from "../../components/activity-avatar-button";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { insertActivity } from "../../state/activity.thunks";

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

  // useEffect(() => {
  //   setSelectedTimeslot(moment(timeslot, "dddd, MMMM Do, h:mm a").toDate());
  // }, [selectedDuration, availableTimeslots]);

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
