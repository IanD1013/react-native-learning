import { useState } from "react";
import { TextInput, SafeAreaView, Text } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  console.log("User type: ", text);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          height: 40,
          width: "80%",
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "grey",
        }}
        placeholder="Enter your name"
        keyboardType="default"
        // secureTextEntry={true}
        // multiline={true}
        // editable
        editable={true}
        // Control the text:
        value={text}
        onChangeText={setText}
      />
      <Text>My Name is: {text}</Text>
    </SafeAreaView>
  );
}
