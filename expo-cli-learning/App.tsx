import { View, Text, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/icon.png")}
      // source={{uri: "link internet"}}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          height: 200,
          width: 200,
          borderRadius: 15,
        }}
      >
        <Text>Hello world</Text>
      </View>
    </ImageBackground>
  );
}
