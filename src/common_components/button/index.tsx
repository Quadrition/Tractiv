import React, { ReactNode } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

import { appColors } from "../../utils/constants/colors";

interface Props {
  children: string;
  icon?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  type?: "primary" | "outlined";
}

const TButton = ({
  children,
  icon,
  onPress,
  disabled = false,
  type = "primary",
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: disabled
            ? appColors.steel
            : type === "primary"
            ? appColors.rust
            : "transparent",
        },
        disabled || type === "outlined" ? styles.outlinedButton : null,
      ]}
    >
      <View style={styles.buttonContent}>
        {icon && icon}
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    shadowColor: "#425965",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.29,
    shadowRadius: 15,
    elevation: 15,
    width: 295,
    borderRadius: 30,
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  outlinedButton: {
    borderColor: appColors.sage,
    borderWidth: 1,
  },
  buttonContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 14,
    color: appColors.snow,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2.1,
    fontFamily: "Rift Soft",
  },
});

export default TButton;
