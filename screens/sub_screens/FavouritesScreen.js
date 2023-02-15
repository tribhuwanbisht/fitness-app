import { StyleSheet, View, Text } from "react-native";

function FavouritesScreen() {
  return <Text style={styles.title}>Favourites Screen</Text>;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
