import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Updates from "expo-updates";
import Constants from "expo-constants";

export default function App() {
  const [isAvailable, setIsAvailable] = useState(false);

  async function onFetchUpdateAsync() {
    try {
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const update = await Updates.checkForUpdateAsync();
        setIsAvailable(update.isAvailable);
      } catch (error) {
        // alert(`Error fetching latest Expo update: ${error}`);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Version: {Constants.expoConfig.version}</Text>
      <Text>isAvailable: {isAvailable.toString()}</Text>

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
