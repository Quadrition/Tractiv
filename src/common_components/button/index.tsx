import { Pressable, Text } from "react-native";

interface Props {
  text: string;
}

const PrimaryButton = ({ text }: Props) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#D97D54",
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
      <Text
        style={{
          fontSize: 14,
          color: "white",
          letterSpacing: 2,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
