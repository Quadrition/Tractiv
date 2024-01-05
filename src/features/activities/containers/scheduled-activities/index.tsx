import { useEffect, useMemo } from "react";
import moment from "moment";
import { GroupedActivities } from "./types";
import { View, Text } from "react-native";
import DailyActivities from "../../components/daily-activities";
import { appColors } from "../../../../utils/constants/colors";
import { useSelector } from "react-redux";
import { fetchActivities } from "../../state/activity.thunks";
import { RootState, useAppDispatch } from "../../../../store";

const ScheduledActivitiesContainer = () => {
  const activities = useSelector(
    (state: RootState) => state.activity.activities
  );

  const groupedActivities = useMemo(() => {
    return activities.reduce((acc, activity) => {
      const date = moment(activity.date).format("YYYY-MM-DD");
      if (acc[date]) {
        acc[date].push(activity);
      } else {
        acc[date] = [activity];
      }
      return acc;
    }, {} as GroupedActivities);
  }, [activities]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  const sortedDates = Object.keys(groupedActivities).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <View style={{ display: "flex", gap: 20 }}>
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          letterSpacing: 0,
          color: appColors.onyx,
          fontFamily: "Europa Bold",
        }}
      >
        Scheduled Activities
      </Text>
      {sortedDates.length === 0 ? (
        <Text
          style={{
            marginLeft: 20,
            fontSize: 14,
            color: appColors.stale,
            fontFamily: "Europa Light",
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
