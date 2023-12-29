import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import ActivityCard from "../features/activities/components/activity-card";
import TractivLogo from "../icons/Logo";

// TODO: Title should not have top shadow
const HomePage = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingVertical: 24,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          shadowColor: "#1B1C20",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <TractivLogo />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 84, paddingTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            letterSpacing: 0,
            color: "#1B1C20",
            lineHeight: 35,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Track Your Activity
        </Text>
        <View style={{ display: "flex", gap: 24, marginTop: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <ActivityCard
              activity={{
                type: "surfing",
                name: "Surfing",
                description: "Ocean Beach",
              }}
            />
            <ActivityCard
              activity={{
                type: "hiking",
                name: "Hiking",
                description: "Torrey Pines",
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <ActivityCard
              activity={{
                type: "weights",
                name: "Weights",
                description: "Encinitas",
              }}
            />
            <ActivityCard
              activity={{
                type: "spinning",
                name: "Spinning",
                description: "Gym",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
