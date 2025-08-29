import { StyleSheet, Text, SafeAreaView, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Title
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: "justify",
        }}
        numberOfLines={2}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <Text
          style={{ color: "white", textDecorationLine: "underline" }}
          onPress={() => Alert.alert("Text pressed!")}
        >
          Press Here
        </Text>
        Dolore aut consequuntur omnis velit architecto tempore molestias iusto
        natus, ex, delectus nobis et tempora placeat? Ut, neque praesentium
        repudiandae maiores ea a aliquam numquam id provident, cum eveniet
        veritatis nobis voluptas saepe vero tenetur, eum autem consequatur?
        Temporibus, quisquam aspernatur? Ullam corrupti dolor officia dicta
        obcaecati laudantium quos quas molestiae!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
