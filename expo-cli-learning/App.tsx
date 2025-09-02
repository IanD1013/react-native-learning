import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text}>Text 2</Text>
      </View>

      <View style={styles.view2}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  view1: {
    height: 200,
    width: 200,
    backgroundColor: "#ff9485",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    backgroundColor: "aqua",
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 50,
  },
});
