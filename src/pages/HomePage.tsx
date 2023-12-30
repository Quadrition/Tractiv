import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ActivityCard from "../features/activities/components/activity-card";
import TractivLogo from "../icons/Logo";
import moment from "moment";
import DailyActivities from "../features/activities/components/daily-activities";
import PrimaryButton from "../common_components/button";

// TODO: Title should not have top shadow
const HomePage = () => {
  moment();
  return (
    <SafeAreaView>
      <View
        style={{
          paddingVertical: 24,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          shadowColor: "#1B1C20",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
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
        }}
      >
        <Text
          style={{
            textAlign: "center",
            letterSpacing: 0,
            color: "#1B1C20",
            lineHeight: 35,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Track Your Activity
        </Text>
        <View style={{ display: "flex", gap: 24, marginTop: 20 }}>
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
        <DailyActivities
          date={moment()}
          activities={[
            { date: moment().toDate(), durationInMinutes: 30, type: "hiking" },
            { date: moment().toDate(), durationInMinutes: 30, type: "surfing" },
            {
              date: moment().toDate(),
              durationInMinutes: 30,
              type: "spinning",
            },
            { date: moment().toDate(), durationInMinutes: 30, type: "weights" },
          ]}
        />
        <PrimaryButton text="Schedule" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
