import { StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text}>Text 2</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.childView}></View>
      </View>

      <View style={styles.view3}></View>
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
    backgroundColor: "black",
    height: 150,
    width: 150,
    margin: 40,
    marginLeft: 20, // will override only margin regardless of appearance order
    paddingTop: 30, // padding add spaces inside; margin outside
  },
  view3: {
    backgroundColor: "red",
    height: 150,
    width: 150,
  },
  childView: {
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  text: {
    fontSize: 50,
  },
});
