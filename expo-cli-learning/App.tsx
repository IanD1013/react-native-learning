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
      <View style={{ width: 90, height: 90, backgroundColor: "tomato" }} />
      <View
        style={{
          width: 90,
          height: 90,
          backgroundColor: "blue",
          bottom: 20,
          left: 20,
          position: "absolute",
        }}
      />
      <View style={{ width: 90, height: 90, backgroundColor: "gold" }} />
      <View style={{ width: 90, height: 90, backgroundColor: "grey" }} />
    </View>
  );
}
