import {
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function App() {
  const onButtonPress = () => Alert.alert("Button pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./assets/splash-icon.png")}
        style={styles.image1}
      />

      <Pressable onPress={onButtonPress}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image2}
          blurRadius={1}
        />
      </Pressable>

      <TouchableOpacity>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image2}
          blurRadius={1}
        />
      </TouchableOpacity>

      <Button title="Press on me" onPress={onButtonPress} />
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
