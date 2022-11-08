import { View, Text, Button } from "react-native";
import React, { useState } from "react";

import styles from "./CounterButton.style";

const CounterButton = ({ title, handlePress }) => {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={handlePress} />
    </View>
  );
};

export default CounterButton;
