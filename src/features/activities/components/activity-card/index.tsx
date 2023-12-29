import { View, Text, Image } from "react-native";
import { Activity } from "../../domain/activity";
import { FC } from "react";
import { activityCardIcon, activityCardImage } from "./helpers";

interface Props {
  activity: Activity;
}

const ActivityCard: FC<Props> = ({ activity }: Props) => {
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
        source={activityCardImage[activity.type]}
        height={107}
        resizeMode="cover"
      />
      <View
        style={{
          width: 45,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000,
          backgroundColor: "#FFFFFF",
          shadowColor: "#425965",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.29, // Converted from hexadecimal 29 (41 in decimal) to opacity (41/255 ≈ 0.29)
          shadowRadius: 30,
          elevation: 30,
          position: "absolute",
          top: 107,
          transform: [{ translateY: -22.5 }],
        }}
      >
        {activityCardIcon[activity.type]}
      </View>
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
        {activity.name}
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
        {activity.description}
      </Text>
    </View>
  );
};

export default ActivityCard;
