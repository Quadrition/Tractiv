import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { ActivityType } from "../../types/activity";
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

const ActivityCard = ({ activityType }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={activityCardImage[activityType]}
        style={styles.image}
        resizeMode="cover"
      />
      <ActivityAvatar activityType={activityType} style={styles.avatar} />
      <Text style={styles.title}>{activityReadableName[activityType]}</Text>
      <Text style={styles.description}>
        {activityDescription[activityType]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
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
  },
  image: {
    height: 107,
  },
  avatar: {
    position: "absolute",
    top: 107,
    transform: [{ translateY: -22.5 }],
  },
  title: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 15,
    color: "#334856",
    fontFamily: "Europa Bold",
  },
  description: {
    textAlign: "center",
    marginTop: 2,
    fontSize: 10,
    letterSpacing: 1.5,
    color: "#7D8184",
    textTransform: "uppercase",
    fontFamily: "Rift Soft",
  },
});

export default ActivityCard;
