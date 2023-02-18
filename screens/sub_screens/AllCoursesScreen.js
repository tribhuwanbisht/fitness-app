import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const banner = require("./../../assets/images/BG.png");
const model = require("./../../assets/images/model.png");
const fire = require("./../../assets/images/fire.png");
const cycle = require("./../../assets/images/cycle.png");
const yoga = require("./../../assets/images/yoga.png");
const walk = require("./../../assets/images/walk.png");
const couple = require("./../../assets/images/couple.jpg");
const star = require("./../../assets/images/Star.png");
const play = require("./../../assets/images/play.png");
const book = require("./../../assets/images/Book.png");

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;

const OfferText = ({ children }) => (
  <Text style={styles.offerText}>{children}</Text>
);

const VideoPlay = () => (
  <View
    style={{
      borderRadius: 15,
      marginHorizontal: 12,
      shadowOffset: { width: -5, height: 3 },
      shadowColor: "grey",
      shadowOpacity: 0.5,
      shadowRadius: 3,
      backgroundColor: "#fff",
    }}
  >
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      <ImageBackground
        source={couple}
        style={{
          height: 150,
          width: 300,
        }}
      >
        <LinearGradient
          locations={[0, 1.0]}
          colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.60)"]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        ></LinearGradient>
      </ImageBackground>
      <Text
        style={{
          position: "absolute",
          bottom: 5,
          left: 10,
          fontFamily: "Poppins-Regular",
          color: "#fff",
        }}
      >
        Transformation
      </Text>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          padding: 5,
          right: 10,
          top: 10,
          borderRadius: 5,
        }}
      >
        <Image source={star} style={{ height: 10, width: 10 }} />
      </View>
    </View>
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "#8860a2",
          padding: 10,
          right: 25,
          top: -15,
          borderRadius: 15,
          zIndex: 3,
        }}
      >
        <Image source={play} style={{ height: 10, width: 10 }} />
      </View>
      <Text style={{ fontFamily: "Poppins-Regular" }}>
        2 Hour Bulking Trainer
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 12 }}>
          <Image source={book} style={{ height: 15, width: 15 }} />
          {"   Beginner"}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 12,
            color: "#8860a2",
          }}
        >
          45 Min
        </Text>
      </View>
    </View>
  </View>
);

function AllCoursesScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Banner Part */}
      <View style={styles.screen}>
        <ImageBackground style={styles.banner} source={banner}>
          <View style={styles.bannerContainer}>
            <View style={styles.rowLabel}>
              <View style={styles.fireContainer}>
                <Image
                  source={fire}
                  resizeMode="contain"
                  style={styles.fireImage}
                />
              </View>
              <Text style={styles.offer}>limited offer</Text>
            </View>
            <OfferText>30% Discount</OfferText>
            <OfferText>Flash Sales</OfferText>
          </View>
        </ImageBackground>
        <Image source={model} style={styles.model} resizeMode="contain" />
      </View>

      {/* Video Part */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Label>Fitness Video</Label>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            opacity: 0.5,
            fontSize: 12,
          }}
        >
          View All
        </Text>
      </View>
      <ScrollView style={styles.videoContainer} horizontal={true}>
        {data.map((item, index) => (
          <VideoPlay index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AllCoursesScreen;

const styles = StyleSheet.create({
  fireImage: { height: 15, width: 15, alignSelf: "center", margin: 5 },
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: "contain",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  bannerContainer: { flex: 1 },
  label: { fontFamily: "Poppins-Medium", fontSize: 20, marginVertical: 10 },
  model: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: "100%",
    width: "50%",
    transform: [{ rotateY: "180deg" }],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: { margin: "3%" },
  offer: { color: "white", fontFamily: "Poppins-Regular", fontSize: 10 },
  offerText: { color: "white", fontSize: 16, fontFamily: "Poppins-Regular" },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  fireContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: { flex: 1, marginTop: 20 },
  videoContainer: {
    flexDirection: "row",
    maxHeight: 230,
  },
});

const data = [
  {
    name: "Cycling",
    status: 85,
    image: cycle,
    lightColor: "#f8e4d9",
    color: "#fcf1ea",
    darkColor: "#fac5a4",
  },
  {
    name: "Walking",
    status: 25,
    image: walk,
    lightColor: "#d7f0f7",
    color: "#e8f7fc",
    darkColor: "#aceafc",
  },
  {
    name: "Yoga",
    status: 85,
    image: yoga,
    lightColor: "#dad5fe",
    color: "#e7e3ff",
    darkColor: "#8860a2",
  },
];
