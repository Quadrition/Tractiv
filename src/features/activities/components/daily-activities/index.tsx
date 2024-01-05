import moment, { Moment } from "moment";
import { View, Text, FlatList } from "react-native";
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
    <View style={{ display: "flex", gap: 12 }}>
      <View style={{ display: "flex", gap: 5, marginLeft: 15 }}>
        <Text
          style={{
            color: appColors.stale,
            fontSize: 14,
            letterSpacing: 2.1,
            textTransform: "uppercase",
            fontFamily: "Rift Soft",
          }}
        >
          {moment(date).format("MMMM D")}
        </Text>
        <Text
          style={{
            color: appColors.onyx,
            fontSize: 18,
            letterSpacing: 0,
            fontFamily: "Europa Bold",
          }}
        >
          {moment(date).format("dddd")}
        </Text>
      </View>
      <FlatList<Activity>
        data={[...activities, {} as Activity, {} as Activity]}
        style={{ backgroundColor: "transparent" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        renderItem={({ item, index }) =>
          index < activities.length ? (
            <View style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <ActivityAvatar
                activityType={item.type}
                style={{ width: 60, height: 60, shadowOpacity: 0.15 }}
              />
              <Text
                style={{
                  color: "#8D8C8C",
                  fontWeight: "300",
                  fontSize: 12,
                  fontFamily: "Europa Regular",
                }}
              >
                {moment(item.date).format("h:mmA")}
              </Text>
            </View>
          ) : (
            <EmptyTimeslot />
          )
        }
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default DailyActivities;
