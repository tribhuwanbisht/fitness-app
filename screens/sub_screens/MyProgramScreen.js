import { StyleSheet, View, Text } from "react-native";

function MyProgramScreen() {
  return <Text style={styles.title}>My Program</Text>;
}

export default MyProgramScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
