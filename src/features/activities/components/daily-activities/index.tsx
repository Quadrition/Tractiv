import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import moment, { Moment } from "moment";

import { Activity } from "../../types/activity";
import ActivityAvatar from "../activity-avatar";
import EmptyTimeslot from "../empty-timeslot";
import { appColors } from "../../../../utils/constants/colors";

interface Props {
  date: Moment;
  activities: Activity[];
}

const DailyActivities = ({ date, activities }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.monthText}>{moment(date).format("MMMM D")}</Text>
        <Text style={styles.dayText}>{moment(date).format("dddd")}</Text>
      </View>
      <FlatList<Activity>
        data={[...activities, {} as Activity, {} as Activity]}
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) =>
          index < activities.length ? (
            <View style={styles.activityItem}>
              <ActivityAvatar activityType={item.type} style={styles.avatar} />
              <Text style={styles.activityTime}>
                {moment(item.date).format("h:mmA")}
              </Text>
            </View>
          ) : (
            <EmptyTimeslot />
          )
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 12,
  },
  dateContainer: {
    display: "flex",
    gap: 5,
    marginLeft: 15,
  },
  monthText: {
    color: appColors.stale,
    fontSize: 14,
    letterSpacing: 2.1,
    textTransform: "uppercase",
    fontFamily: "Rift Soft",
  },
  dayText: {
    color: appColors.onyx,
    fontSize: 18,
    letterSpacing: 0,
    fontFamily: "Europa Bold",
  },
  flatList: {
    backgroundColor: "transparent",
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  activityItem: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    shadowOpacity: 0.15,
  },
  activityTime: {
    color: "#8D8C8C",
    fontWeight: "300",
    fontSize: 12,
    fontFamily: "Europa Regular",
  },
  separator: {
    width: 20,
  },
});

export default DailyActivities;
