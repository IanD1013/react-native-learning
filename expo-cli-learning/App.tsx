import { StyleSheet, Text, SafeAreaView, Alert, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./assets/splash-icon.png")}
        style={styles.image1}
      />

      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image2}
        blurRadius={1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image1: {
    height: 200,
    width: 200,
  },
  image2: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});
