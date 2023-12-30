import { View, Text } from "react-native";
import { GroupedActivities } from "./types";
import DailyActivities from "../daily-activities";
import moment from "moment";

interface Props {
  groupedActivities: GroupedActivities;
}

const ScheduledActivities = ({ groupedActivities }: Props) => {
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
          color: "#1B1C20",
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
            color: "#6E8CA0",
          }}
        >
          You don't have any activities scheduled yet.
        </Text>
      ) : (
        sortedDates.map((date) => {
          return (
            <DailyActivities
              date={moment(date)}
              activities={groupedActivities[date]}
            />
          );
        })
      )}
    </View>
  );
};

export default ScheduledActivities;
