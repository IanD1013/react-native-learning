import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ flex: 2, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "gold" }}></View>
    </View>
  );
}
