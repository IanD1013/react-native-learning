import { StyleSheet, SafeAreaView, Text, View, Dimensions } from "react-native";

export default function App() {
  // Percentage
  // Dimensions
  // Libraries for responsive

  console.log(Dimensions.get("screen"));

  const PHONE_HEIGHT = Dimensions.get("screen").height;
  const PHONE_WIDTH = Dimensions.get("screen").width;

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          width: PHONE_WIDTH / 2,
          height: PHONE_HEIGHT / 2,
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
}
