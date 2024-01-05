import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import ActivityCard from "../features/activities/components/activity-card";
import TractivLogo from "../assets/icons/Logo";
import TButton from "../common_components/button";
import ScheduledActivitiesContainer from "../features/activities/containers/scheduled-activities";
import { Icons, renderIcon } from "../utils/helpers/icons.helper";
import { AppRoutes } from "../utils/constants/routes";
import { appColors } from "../utils/constants/colors";

interface Props {
  navigation: any;
}

const HomePage = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ backgroundColor: appColors.snow }}>
      <StatusBar barStyle={"dark-content"} />
      <View
        style={{
          paddingVertical: 24,
          display: "flex",
          alignItems: "center",
          backgroundColor: appColors.snow,
          shadowColor: appColors.onyx,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <TractivLogo />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 84,
          paddingTop: 20,
          display: "flex",
          gap: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: appColors.onyx,
            fontSize: 18,
            fontFamily: "Europa Bold",
          }}
        >
          Track Your Activity
        </Text>
        <View style={{ display: "flex", gap: 24 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <ActivityCard activityType="surfing" />
            <ActivityCard activityType="hiking" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <ActivityCard activityType="weights" />
            <ActivityCard activityType="spinning" />
          </View>
        </View>
        <ScheduledActivitiesContainer />
        <TButton
          icon={renderIcon(Icons.Plus)}
          onPress={() => {
            navigation.navigate(AppRoutes.SCHEDULE_ACTIVITY);
          }}
        >
          Schedule Activity
        </TButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
