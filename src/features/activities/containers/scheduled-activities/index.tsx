import { useEffect, useState } from "react";
import ScheduledActivities from "../../components/scheduled-activities";
import { Activity } from "../../domain/activity";
import { GroupedActivities } from "../../components/scheduled-activities/types";
import moment from "moment";

interface Props {
  activities: Activity[];
}

const ScheduledActivitiesContainer = ({ activities }: Props) => {
  const [groupedActivities, setGroupedActivities] = useState<GroupedActivities>(
    {}
  );

  useEffect(() => {
    const groupedActivities = activities.reduce((acc, activity) => {
      const date = moment(activity.date).format("YYYY-MM-DD");
      if (acc[date]) {
        acc[date].push(activity);
      } else {
        acc[date] = [activity];
      }
      return acc;
    }, {} as GroupedActivities);

    setGroupedActivities(groupedActivities);
  }, [activities]);

  return <ScheduledActivities groupedActivities={groupedActivities} />;
};

export default ScheduledActivitiesContainer;
