import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "./src/redux/store";

import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import StoreScreen from "./src/screens/Store";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Login from "./src/screens/VendorAuth/CreateVendor";
import CreateVendor from "./src/screens/VendorAuth/CreateVendor";
import CreateUser from "./src/screens/ConsumerAuth/CreateUser";
import Dashboard from "./src/screens/dashboard/Dashboard";
import CartScreen from "./src/screens/CartScreen";
import Checkout from "./src/screens/Checkout";
import NutritionaScreen from "./src/screens/NutritionaScreen";
import BottomNavigation from "./src/components/shared/navigation/tabs";
import { auth, db } from "./config"; // Update with the correct path
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAuthenticated(true);
      } else {
        try {
          const userData = await AsyncStorage.getItem("user");
          if (userData) {
            setIsAuthenticated(true);  
          
          } else {
            setIsAuthenticated(false);
          }s
        } catch (error) {
          console.error(
            "Failed to retrieve user data from AsyncStorage:",
            error
          );
          setIsAuthenticated(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Product"
                component={NutritionaScreen}
              />

              {/* <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Dashboard"
                component={Dashboard}
              /> */}

              <Stack.Screen
                options={{
                  headerBackTitleVisible: false,
                }}
                name="Cart"
                component={CartScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Details"
                component={ProductDetailScreen}
              />
              <Stack.Screen
                options={{
                  headerBackTitleVisible: false,
                }}
                name="Checkout"
                component={Checkout}
              />
              <Stack.Screen name="Category" component={ProductDetailScreen} />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Store"
                component={StoreScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Home"
                component={WelcomeScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{
                  headerBackTitleVisible: false,
                  title: "Create Account",
                  headerShadowVisible: false,
                  headerTitleVisible: false,
                  headerBackTitleShown: false,
                  headerBackTitle: "Create Account",
                }}
                name="CreateUser"
                component={CreateUser}
              />
              <Stack.Screen
                options={{
                  headerBackTitleVisible: false,
                  title: "Create Account",
                  headerShadowVisible: false,
                  headerTitleVisible: false,
                  headerBackTitleShown: false,
                  headerBackTitle: "Create Account",
                }}
                name="CreateVendor"
                component={CreateVendor}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
