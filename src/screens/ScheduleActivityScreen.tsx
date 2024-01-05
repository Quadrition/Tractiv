import { SafeAreaView, StatusBar, View } from "react-native";
import ScheduleActivityContainer from "../features/activities/containers/schedule-activity";

const ScheduleActivityScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#344856" }}>
      <StatusBar barStyle="light-content" backgroundColor="#344856" />
      <View
        style={{
          backgroundColor: "#344856",
          height: "100%",
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 35,
        }}
      >
        <ScheduleActivityContainer />
      </View>
    </SafeAreaView>
  );
};

export default ScheduleActivityScreen;
