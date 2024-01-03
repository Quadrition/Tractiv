import { useEffect, useState } from "react";
import moment from "moment";
import activityService from "../../services/activity.service";
import { GroupedActivities } from "./types";
import { View, Text } from "react-native";
import DailyActivities from "../../components/daily-activities";
import { appColors } from "../../../../utils/constants/colors";

const ScheduledActivitiesContainer = () => {
  const [groupedActivities, setGroupedActivities] = useState<GroupedActivities>(
    {}
  );

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const activities = await activityService.getAllActivities();

    // * Group activities by date
    const groupedActivities = activities.reduce((acc, activity) => {
      const date = moment(activity.date).format("YYYY-MM-DD");
      if (acc[date]) {
        acc[date].push(activity);
      } else {
        acc[date] = [activity];
      }
      return acc;
    }, {} as GroupedActivities);

    setGroupedActivities(groupedActivities);
  };

  const sortedDates = Object.keys(groupedActivities).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <View style={{ display: "flex", gap: 20 }}>
      <Text
        style={{
          marginLeft: 20,
          fontWeight: "bold",
          fontSize: 18,
          letterSpacing: 0,
          color: appColors.onyx,
        }}
      >
        Scheduled Activities
      </Text>
      {sortedDates.length === 0 ? (
        <Text
          style={{
            marginLeft: 20,
            fontWeight: "300",
            fontSize: 14,
            letterSpacing: 0,
            color: appColors.stale,
          }}
        >
          You don't have any activities scheduled yet.
        </Text>
      ) : (
        sortedDates.map((date) => {
          return (
            <DailyActivities
              key={date}
              date={moment(date)}
              activities={groupedActivities[date].sort(
                (a, b) => a.date.getTime() - b.date.getTime()
              )}
            />
          );
        })
      )}
    </View>
  );
};

export default ScheduledActivitiesContainer;
