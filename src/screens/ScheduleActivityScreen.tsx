import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import ScheduledActivitiesContainer from "../features/activities/containers/scheduled-activities";
import { Link, StackActions } from "@react-navigation/native";
import ScheduleActivityContainer from "../features/activities/containers/schedule-activity";

interface Props {
  navigation: any;
}

const ScheduleActivityScreen = ({ navigation }: Props) => {
  // TODO: Check X button
  return (
    <SafeAreaView style={{ backgroundColor: "#344856" }}>
      <View
        style={{
          backgroundColor: "#344856",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));
          }}
          style={{ position: "absolute", top: 28, left: 32 }}
        >
          <Text style={{ color: "white" }}>X</Text>
        </Pressable>
        <ScheduleActivityContainer />
      </View>
    </SafeAreaView>
  );
};

export default ScheduleActivityScreen;
