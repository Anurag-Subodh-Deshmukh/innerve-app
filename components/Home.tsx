import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  const handleLogout = () => {
    navigation.replace("Login"); // Navigate to Login screen on logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Home;
