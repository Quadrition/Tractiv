import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from "react-native";

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
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"dark-content"} backgroundColor={appColors.snow} />
      <View style={styles.logoContainer}>
        <TractivLogo />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Track Your Activity</Text>
        <View style={styles.activityContainer}>
          <View style={styles.activityRow}>
            <ActivityCard activityType="surfing" />
            <ActivityCard activityType="hiking" />
          </View>
          <View style={styles.activityRow}>
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

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: appColors.snow,
    flex: 1,
  },
  logoContainer: {
    paddingVertical: 24,
    alignItems: "center",
    backgroundColor: appColors.snow,
    shadowColor: appColors.onyx,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  scrollContainer: {
    paddingBottom: 32,
    paddingTop: 20,
    display: "flex",
    gap: 20,
  },
  heading: {
    textAlign: "center",
    color: appColors.onyx,
    fontSize: 18,
    fontFamily: "Europa Bold",
  },
  activityContainer: {
    display: "flex",
    gap: 24,
  },
  activityRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default HomePage;
