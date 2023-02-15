import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyProgramScreen from "./sub_screens/MyProgramScreen";
import AllCoursesScreen from "./sub_screens/AllCoursesScreen";
import FavouritesScreen from "./sub_screens/FavouritesScreen";

const Tab = createMaterialTopTabNavigator();

function WorkoutScreen() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarLabelStyle: {
            textTransform: "none",
          },
          tabBarActiveTintColor: "#2dccce",
          tabBarInactiveTintColor: "gray",
          tabBarAndroidRipple: {
            color: "#e6e2e2",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#2dccce",
          },
        })}
      >
        <Tab.Screen
          name="MyProgramScreen"
          component={MyProgramScreen}
          options={{ title: "My Program" }}
        />
        <Tab.Screen
          name="AllCoursesScreen"
          component={AllCoursesScreen}
          options={{ title: "All Courses" }}
        />
        <Tab.Screen
          name="FavouritesScreen"
          component={FavouritesScreen}
          options={{
            title: "Favourites",
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default WorkoutScreen;
