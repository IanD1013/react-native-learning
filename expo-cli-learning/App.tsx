import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(20);

  const IncreaseValue = () => setState((prev) => prev + 1);
  const DecreaseValue = () => setState((prev) => prev - 1);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Button title="Increase" onPress={IncreaseValue} />
      <Text style={{ fontSize: 100 }}>{state}</Text>
      <Button title="Decrease" onPress={DecreaseValue} />
    </View>
  );
}
