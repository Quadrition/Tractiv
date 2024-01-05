import { View, Text, Image } from "react-native";
import { ActivityType } from "../../types/activity";
import { FC } from "react";
import {
  activityCardImage,
  activityDescription,
  activityReadableName,
} from "./helpers";
import ActivityAvatar from "../activity-avatar";
import { appColors } from "../../../../utils/constants/colors";

interface Props {
  activityType: ActivityType;
}

const ActivityCard: FC<Props> = ({ activityType }: Props) => {
  return (
    <View
      style={{
        paddingBottom: 16,
        backgroundColor: appColors.snow,
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
          fontSize: 15,
          color: "#334856",
          fontFamily: "Europa Bold",
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
          fontFamily: "Rift Soft",
        }}
      >
        {activityDescription[activityType]}
      </Text>
    </View>
  );
};

export default ActivityCard;
