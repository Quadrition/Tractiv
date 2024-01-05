import { Pressable, ViewStyle } from "react-native";

import ActivityAvatar from "../activity-avatar";
import { ActivityType } from "../../types/activity";

interface Props {
  activityType: ActivityType;
  onPressed?: (activityType: ActivityType) => void;
  style?: ViewStyle;
  isSelected?: boolean;
}

const ActivityAvatarButton = ({
  activityType,
  onPressed,
  style,
  isSelected,
}: Props) => {
  return (
    <Pressable onPress={() => onPressed && onPressed(activityType)}>
      <ActivityAvatar
        activityType={activityType}
        style={style}
        isPrimary={isSelected}
      />
    </Pressable>
  );
};

export default ActivityAvatarButton;
