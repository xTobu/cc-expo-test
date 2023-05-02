import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Application from "expo-application";
import * as Updates from "expo-updates";
import Constants from "expo-constants";

export default function App() {
  const [isAvailable, setIsAvailable] = useState(false);

  async function onFetchUpdateAsync() {
    try {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  async function checkUpdate() {
    try {
      const update = await Updates.checkForUpdateAsync();
      setIsAvailable(update.isAvailable);
    } catch (error) {
      alert(`Error Updates.checkForUpdateAsync(): ${error}`);
    }
  }

  useEffect(() => {
    // checkUpdate();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>
        Application.nativeBuildVersion:
        {Application.nativeBuildVersion}
      </Text> */}
      <Text>app.json version: {Constants.expoConfig.version}</Text>
      {/* <Text>Build with [Version]</Text>
      <Text>Upgrade{"\n"}</Text> */}

      <Button title={"Check isAvailable"} onPress={checkUpdate}></Button>
      <Text>
        isAvailable: {isAvailable.toString()}
        {"\n"}
      </Text>
      <Button title="Fetch update" onPress={onFetchUpdateAsync} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
