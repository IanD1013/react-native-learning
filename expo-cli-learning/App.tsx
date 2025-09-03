import { View } from "react-native";
import { s, vs, scale, verticalScale } from "react-native-size-matters";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View
        style={{
          width: scale(300),
          height: vs(600),
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
}
``;
