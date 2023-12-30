import { GroupedActivities } from "./types";

interface Props {
  groupedActivities: GroupedActivities;
}

const ScheduledActivities = ({ groupedActivities }: Props) => {
  return Object.keys(groupedActivities).map((date) => {});
};

export default ScheduledActivities;
