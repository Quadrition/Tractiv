import { Pressable, SafeAreaView, View, Text } from "react-native";
import ActivityIcon from "../../../../common_components/activity-icon";
import { ActivityType } from "../../types/activity";
import PrimaryButton from "../../../../common_components/button";
import React from "react";

const ScheduleActivityContainer = () => {
  // TODO: Check X button
  return (
    <View style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
      <View />
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
            gap: 32,
            justifyContent: "center",
          }}
        >
          {["surfing", "hiking", "weights", "spinning"].map((activity) => (
            <View
              style={{ display: "flex", gap: 8, alignItems: "center" }}
              key={activity}
            >
              <ActivityIcon
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
      </View>
      <PrimaryButton>Schedule</PrimaryButton>
    </View>
  );
};

export default ScheduleActivityContainer;
