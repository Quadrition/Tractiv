import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

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
          ? "#C8D1D3"
          : type === "primary"
          ? "#D97D54"
          : "transparent",
        shadowColor: "#425965",
        alignSelf: "center",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.29,
        shadowRadius: 15,
        elevation: 15,
        width: 295,
        borderRadius: 30,
        borderColor: "#87BCBF",
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
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default TButton;
