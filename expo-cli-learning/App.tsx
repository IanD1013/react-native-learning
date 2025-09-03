import React, { useState } from "react";
import { Button, SafeAreaView, Modal, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "gold",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Button title="Show Model" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">
        <Text style={{ fontSize: 50, marginTop: 50 }}>Modal is opened</Text>
        <Button title="Close Model" onPress={() => setModalVisible(false)} />
        <AntDesign
          name="closecircleo"
          size={24}
          color="black"
          onPress={() => setModalVisible(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}
