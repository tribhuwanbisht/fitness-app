import { StyleSheet, View, Text } from "react-native";

function AllCoursesScreen() {
  return <Text style={styles.title}>All courses screen</Text>;
}

export default AllCoursesScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
