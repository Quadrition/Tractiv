import { View, ViewStyle } from "react-native";
import { ActivityType } from "../../features/activities/types/activity";
import { renderIcon } from "../../utils/helpers/icons.helper";
import { activityIcon } from "./helpers";

interface Props {
  activityType: ActivityType;
  style?: ViewStyle;
  isPrimary?: boolean;
}

const ActivityAvatar = ({ activityType, style, isPrimary = false }: Props) => {
  return (
    <View
      style={{
        width: 45,
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1000,
        backgroundColor: isPrimary ? "#d97d54" : "#FFFFFF",
        shadowColor: "#425965",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.29,
        shadowRadius: 10,
        elevation: 10,
        ...style,
      }}
    >
      {renderIcon(activityIcon[activityType], {
        width: "66%",
        height: "66%",
        color: isPrimary ? "#FFFFFF" : "#d97d54",
      })}
    </View>
  );
};

export default ActivityAvatar;
