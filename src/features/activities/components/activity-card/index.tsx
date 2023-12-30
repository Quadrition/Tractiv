import { View, Text, Image } from "react-native";
import { Activity, ActivityType } from "../../domain/activity";
import { FC } from "react";
import {
  activityCardImage,
  activityDescription,
  activityReadableName,
} from "./helpers";
import ActivityIcon from "../../../../common_components/activity-icon";

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
        shadowOpacity: 0.2, // Converted from hexadecimal 1A (26 in decimal) to opacity (26/255 ≈ 0.1)
        shadowRadius: 15,
        borderRadius: 15,
        elevation: 15, // For Android shadow effect
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
      <ActivityIcon
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
          lineHeight: 35,
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
          lineHeight: 12,
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
