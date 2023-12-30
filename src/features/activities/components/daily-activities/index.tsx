import moment, { Moment } from "moment";
import { View, Text, FlatList } from "react-native";
import { Activity } from "../../domain/activity";
import ActivityIcon from "../../../../common_components/activity-icon";

interface Props {
  date: Moment;
  activities: Activity[];
}

const DailyActivities = ({ date, activities }: Props) => {
  return (
    <View style={{ display: "flex", gap: 12 }}>
      <View style={{ display: "flex", gap: 5, marginLeft: 15 }}>
        <Text
          style={{
            color: "#6E8CA0",
            fontSize: 14,
            letterSpacing: 2.1,
            textTransform: "uppercase",
          }}
        >
          {date.format("MMMM d")}
        </Text>
        <Text
          style={{
            color: "#1B1C20",
            fontSize: 18,
            letterSpacing: 0,
            fontWeight: "bold",
          }}
        >
          {date.format("dddd")}
        </Text>
      </View>
      <FlatList<Activity>
        data={activities}
        style={{ backgroundColor: "transparent" }}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <View style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ActivityIcon
              activityType={item.type}
              style={{ width: 60, height: 60, shadowOpacity: 0.15 }}
            />
            <Text
              style={{
                color: "#8D8C8C",
                fontWeight: "300",
                fontSize: 12,
                lineHeight: 14,
              }}
            >
              {moment(date).format("h:mmA")}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default DailyActivities;
