import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import WorkoutScreen from "./screens/WorkoutScreen";
import NutritionScreen from "./screens/NutritionScreen";
import MotivationScreen from "./screens/MotivationScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <NavigationContainer>
          <Text style={styles.title}>Fitness App</Text>
          <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Workout") {
                  iconName = "barbell-outline";
                } else if (route.name === "Nutrition") {
                  iconName = "restaurant-outline";
                } else if (route.name === "Motivation") {
                  iconName = "flash-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#2dccce",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
              headerStyle: { backgroundColor: "#e7dede" },
            })}
          >
            <Tab.Screen name="Workout" component={WorkoutScreen} />
            <Tab.Screen name="Nutrition" component={NutritionScreen} />
            <Tab.Screen name="Motivation" component={MotivationScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 50,
    padding: 7,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#2dccce",
  },
});
