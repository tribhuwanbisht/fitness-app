import { StyleSheet, View, Text } from "react-native";
import IconButton from "./../../components/ui/IconButton";
import { useContext } from "react";
import { AuthContext } from "./../../store/auth-context";

function FavouritesScreen() {
  const authCtx = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.title}>Favourites Screen</Text>
      <IconButton
        icon="exit"
        size={24}
        color={"#f51e06"}
        onPress={authCtx.logout}
      ></IconButton>
    </View>
  );
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
