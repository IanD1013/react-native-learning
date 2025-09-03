import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        alignItems: "center", // when you use flexWrap, this doesn't do anything
        flexWrap: "wrap",
        alignContent: "center", // need to use alignContent
      }}
    >
      <View style={{ width: 90, height: 90, backgroundColor: "tomato" }} />
      <View style={{ width: 90, height: 90, backgroundColor: "blue" }} />
      <View style={{ width: 90, height: 90, backgroundColor: "gold" }} />
      <View style={{ width: 90, height: 90, backgroundColor: "grey" }} />
      <View style={{ width: 90, height: 90, backgroundColor: "green" }} />
    </View>
  );
}
