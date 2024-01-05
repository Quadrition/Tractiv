import React from "react";
import { View, StyleSheet } from "react-native";

import { appColors } from "../../../../utils/constants/colors";

const EmptyTimeslot = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.ice,
    borderRadius: 1000,
    width: 60,
    height: 60,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: appColors.steel,
  },
});

export default EmptyTimeslot;
