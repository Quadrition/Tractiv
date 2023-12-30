import { useEffect, useState } from "react";
import ScheduledActivities from "../../components/scheduled-activities";
import { GroupedActivities } from "../../components/scheduled-activities/types";
import moment from "moment";
import activityService from "../../services/activity.service";

const ScheduledActivitiesContainer = () => {
  const [groupedActivities, setGroupedActivities] = useState<GroupedActivities>(
    {}
  );

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await activityService.getAllActivities();

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
    };

    fetchActivities();
  }, []);

  return <ScheduledActivities groupedActivities={groupedActivities} />;
};

export default ScheduledActivitiesContainer;
