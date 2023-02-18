//Importing necessary modules
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext, useEffect, useCallback } from "react";

//Importing Main Screen Files
import WorkoutScreen from "./screens/WorkoutScreen";
import NutritionScreen from "./screens/NutritionScreen";
import MotivationScreen from "./screens/MotivationScreen";

//Importing Components
import Header from "./components/Header";

//Importing AuthScreen Files
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

//Initializing Stack and Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Importing AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Importing AppLoading
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

// AuthStack => Login and Signup page
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#91bdcc" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#d0f5f2" },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

//AuthenticatedStack=> Pages that will be rendered after successful authentication
const AuthenticatedStack = () => {
  return (
    <>
      <Header />
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
        <Tab.Screen
          name="Motivation"
          component={MotivationScreen}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </>
  );
};

//Main navigation
const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

//Root (For making the welcome screen autoload without th login screnn shown)
const Root = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    };

    fetchToken();
  }, []);

  if (appIsReady) {
    SplashScreen.hideAsync();
  }
  if (!appIsReady) {
    return null;
  }

  return <Navigation />;
};

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Root />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
