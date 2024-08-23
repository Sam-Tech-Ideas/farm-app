import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../../screens/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../../../screens/ProfileScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CartScreen from "../../../screens/CartScreen";
import OrderScreen from "../../../screens/OrderScreen";




const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Ionicons
                name="home-outline"
                size={size}
                color={focused ? "green" : "gray"}
              />
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Ionicons
                name="cart-outline"
                size={size}
                color={focused ? "green" : "gray"}
              />
            </View>
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        name="Order History"
        options={{
          headerShown: false,
          tabBarLabel: "Order History",
          tabBarItemStyle: {
            color: "red",
          },

          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <MaterialCommunityIcons
                name="history"
                size={size}
                color={focused ? "green" : "gray"}
              />
            </View>
          ),
        }}
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarItemStyle: {
            color: "red",
          },

          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={size}
                color={focused ? "green" : "gray"}
              />
            </View>
          ),
        }}
        name="Account"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
