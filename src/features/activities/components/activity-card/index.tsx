import { View, Text, Image } from "react-native";
import { ActivityType } from "../../types/activity";
import { FC } from "react";
import {
  activityCardImage,
  activityDescription,
  activityReadableName,
} from "./helpers";
import ActivityAvatar from "../../../../common_components/activity-avatar";

interface Props {
  activityType: ActivityType;
}

const ActivityCard: FC<Props> = ({ activityType }: Props) => {
  return (
    <View
      style={{
        paddingBottom: 16,
        backgroundColor: "white",
        shadowColor: "#1B1C20",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        borderRadius: 15,
        elevation: 15,
        opacity: 1,
        width: 136,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        source={activityCardImage[activityType]}
        height={107}
        resizeMode="cover"
      />
      <ActivityAvatar
        activityType={activityType}
        style={{
          position: "absolute",
          top: 107,
          transform: [{ translateY: -22.5 }],
        }}
      />
      <Text
        style={{
          marginTop: 25,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 15,
          letterSpacing: 0,
          color: "#334856",
        }}
      >
        {activityReadableName[activityType]}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 2,
          fontSize: 10,
          letterSpacing: 1.5,
          color: "#7D8184",
          textTransform: "uppercase",
        }}
      >
        {activityDescription[activityType]}
      </Text>
    </View>
  );
};

export default ActivityCard;
