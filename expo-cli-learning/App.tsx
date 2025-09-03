import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: 100, height: 100, backgroundColor: "tomato" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "gold" }} />
    </View>
  );
}
