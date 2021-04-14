import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const green = "#AEC69B";
  const yellow = "#F3D387";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MASKE-INGENIØREN</Text>

      <Switch
        style={styles.toggle}
        trackColor={{ false: "#FFFFFF", true: "#FFFFFF" }}
        thumbColor={isEnabled ? green : yellow}
        ios_backgroundColor="#FFFFFF"
        onValueChange={toggleSwitch}
        value={isEnabled}
      ></Switch>

      <Text
        style={[
          styles.calculator,
          isEnabled
            ? { backgroundColor: green }
            : { backgroundColor: yellow },
        ]}
      ></Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D4D4D",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    padding: 15,
    alignSelf: "center",
    color: "#fff",
  },
  calculator: {
    width: 800,
    height: 1000,
    marginTop: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  toggle: {},
});

/*
#AEC69B green
*/
