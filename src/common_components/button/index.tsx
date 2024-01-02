import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  children: string;
  icon?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  icon,
  onPress,
  disabled = false,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: !disabled ? "#D97D54" : "#C8D1D3",
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
            // TODO: Add spacing
            fontSize: 14,
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
