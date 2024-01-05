import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { ActivityType } from "../../types/activity";
import { renderIcon } from "../../../../utils/helpers/icons.helper";
import { activityIcon } from "./helpers";
import { appColors } from "../../../../utils/constants/colors";

interface Props {
  activityType: ActivityType;
  style?: ViewStyle;
  isPrimary?: boolean;
}

const ActivityAvatar = ({ activityType, style, isPrimary = false }: Props) => {
  return (
    <View style={[styles.container, isPrimary && styles.primary, style]}>
      {renderIcon(activityIcon[activityType], {
        width: "66%",
        height: "66%",
        color: isPrimary ? appColors.snow : appColors.rust,
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    backgroundColor: appColors.snow,
    shadowColor: "#425965",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.29,
    shadowRadius: 20,
    elevation: 20,
  },
  primary: {
    backgroundColor: appColors.rust,
  },
});

export default ActivityAvatar;
