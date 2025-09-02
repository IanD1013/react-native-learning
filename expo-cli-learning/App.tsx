import { StyleSheet, SafeAreaView, Text, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This {Platform.OS === "android" ? "Android" : "IOS"} Device</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "grey" : "aqua",
    justifyContent: "center",
  },
});
