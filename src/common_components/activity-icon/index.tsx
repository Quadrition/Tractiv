import { View, ViewStyle } from "react-native";
import { activityIcon } from "./helpers";
import { ActivityType } from "../../features/activities/types/activity";

interface Props {
  activityType: ActivityType;
  style?: ViewStyle;
}

const ActivityIcon = ({ activityType, style }: Props) => {
  return (
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
        shadowOpacity: 0.29,
        shadowRadius: 10,
        elevation: 10,
        ...style,
      }}
    >
      {activityIcon[activityType]}
    </View>
  );
};

export default ActivityIcon;
