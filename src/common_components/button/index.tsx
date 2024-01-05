import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
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
      style={{
        backgroundColor: disabled
          ? appColors.steel
          : type === "primary"
          ? appColors.rust
          : "transparent",
        shadowColor: "#425965",
        alignSelf: "center",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.29,
        shadowRadius: 15,
        elevation: 15,
        width: 295,
        borderRadius: 30,
        borderColor: appColors.sage,
        borderWidth: disabled || type === "outlined" ? 1 : 0,
        height: 50,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {icon && icon}
        <Text
          style={{
            fontSize: 14,
            color: appColors.snow,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2.1,
            fontFamily: "Rift Soft",
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default TButton;
