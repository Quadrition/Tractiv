import React from "react";
import { SafeAreaView, StatusBar, View, StyleSheet } from "react-native";

import ScheduleActivityContainer from "../features/activities/containers/schedule-activity";

const ScheduleActivityScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#344856" />
      <View style={styles.container}>
        <ScheduleActivityContainer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#344856",
  },
  container: {
    flex: 1,
    backgroundColor: "#344856",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 35,
  },
});

export default ScheduleActivityScreen;
