import { StyleSheet, View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";
import { useFonts } from "expo-font";
const cycle = require("./../../assets/images/cycle.png");
const yoga = require("./../../assets/images/yoga.png");
const walk = require("./../../assets/images/walk.png");
const next = require("./../../assets/images/next.png");
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

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;

const Card = ({ data, index }) => {
  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 180 : 150,
        padding: 10,
        alignSelf: "center",
        backgroundColor: data.color,
        justifyContent: "space-between",
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: "lightgrey",
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}
    >
      <Image source={data.image} style={{ height: 25, width: 25 }} />
      <View style={{ alignSelf: "center", margin: 5 }}>
        <Progress.Circle
          size={50}
          progress={data.status / 100}
          showsText
          unfilledColor="#ededed"
          borderColor="#ededed"
          color={data.darkColor}
          direction="counter-clockwise"
          fill="white"
          strokeCap="round"
          thickness={5}
          style={{
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}
          textStyle={{
            fontSize: 16,
            fontFamily: "Poppins-Bold",
            fontWeight: "bold",
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 10, fontFamily: "Poppins-Light" }}>
          {"Day     1"}
        </Text>
        <Text style={{ fontSize: 10, fontFamily: "Poppins-Light" }}>
          {"Time   20 min"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "Poppins-Regular" }}>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}
        >
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const Stats = () => {
  return (
    <View style={{ marginHorizontal: "3%" }}>
      <Label>Your Activities</Label>
      <View style={{ flexDirection: "row" }}>
        {data.map((item, index) => (
          <Card key={item.name} data={item} index={index} />
        ))}
      </View>
    </View>
  );
};

function MyProgramScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Light": require("./../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./../../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Stats />;
}

export default MyProgramScreen;

const styles = StyleSheet.create({
  label: { fontFamily: "Poppins-Medium", fontSize: 20, marginVertical: 10 },
});
