import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import ActivityCard from "../features/activities/components/activity-card";
import TractivLogo from "../assets/icons/Logo";
import TButton from "../common_components/button";
import ScheduledActivitiesContainer from "../features/activities/containers/scheduled-activities";
import { Icons, renderIcon } from "../utils/helpers/icons.helper";

interface Props {
  navigation: any;
}

// TODO: Title should not have top shadow
const HomePage = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View
        style={{
          paddingVertical: 24,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          shadowColor: "#1B1C20",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
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
            letterSpacing: 0,
            color: "#1B1C20",
            lineHeight: 35,
            fontSize: 18,
            fontWeight: "bold",
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
            navigation.navigate("Schedule Activity");
          }}
        >
          Schedule Activity
        </TButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
