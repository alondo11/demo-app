import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CounterButton from "./components/CounterButton";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <CounterButton handlePress={handleDecrease} title="-" />
      <Text style={styles.counterText}>{counter}</Text>
      <CounterButton handlePress={handleIncrease} title="+" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 50,
  },
});
