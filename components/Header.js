import { View, Text, StyleSheet, Image } from "react-native";
import { AuthContext } from "./../store/auth-context";
import React, { useContext, useCallback } from "react";
import { useFonts } from "expo-font";

const headerImage = require("./../assets/images/header.jpg");
const notification = require("./../assets/images/Notification.png");

const ImageContainer = ({ image, height = "100%", width = "100%" }) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{ height, width }]} />
  </View>
);

const HeaderTitle = () => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hi, Neeru</Text>
    <Text style={styles.smallTitle}>Aug 12, 2021</Text>
  </View>
);

const Header = () => {
  const authCtx = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View>
        <Text style={styles.appTitle}>Fitness App</Text>
      </View>
      <View style={styles.header}>
        <ImageContainer image={headerImage} />
        <HeaderTitle />
        <ImageContainer image={notification} height={"50%"} width={"50%"} />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  //   container: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  appTitle: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#2dccce",
  },
  header: {
    marginTop: 5,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: { paddingHorizontal: 10, flex: 1, justifyContent: "center" },
  bigTitle: { fontSize: 16, fontFamily: "Poppins-Medium" },
  smallTitle: { fontSize: 10, fontFamily: "Poppins-Regular", opacity: 0.6 },
  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
