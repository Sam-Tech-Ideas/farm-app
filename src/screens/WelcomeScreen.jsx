import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Onboarding from "./Onboarding";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeScreen = ({ navigation }) => {
  const [customer, setCustomer] = useState(false);
  const [vendor, setVendor] = useState(false);

  const handleCheck = (value) => {
    if (value === "customer") {
      setCustomer(true);
      setVendor(false);
      console.log("customer");
    } else {
      setVendor(true);
      setCustomer(false);
        console.log("vendor");
    }
  };


    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setIsAuthenticated(true);
        } else {
          try {
            const userData = await AsyncStorage.getItem("user");
            console.warn(userData)
            if (userData) {
              setIsAuthenticated(true);
              navigation.navigate("Home");
            } else {
              setIsAuthenticated(false);
            }
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


  return (
    <SafeAreaView className="p-4 flex-row justify-center items-center h-screen  bg-white">
       <Onboarding />
      <FlatList
        data={[0]}
        renderItem={({ item }) => (
          <View className="text-center flex-col gap-y-8 justify-center items-center">
            <Text className="font-bold text-2xl">AgroMart</Text>

            <Text className="font-bold text-center">I am here to ...</Text>
            <TouchableOpacity
              className="bg-gray-200 flex-row justify-between items-center text-white p-4 h-24 w-full rounded-md my-2"
              onPress={() => handleCheck("customer")}
            >
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/ecommerce-9d7c8.appspot.com/o/Online%20Groceries-bro.png?alt=media&token=00948122-bb4b-4936-a549-f4212112a4e6",
                }}
                className="h-full w-12 object-cover"
              />

              <Text className="text-center font-bold">Buy Foodstuufs</Text>

              <Checkbox
                value={customer}
                onValueChange={() => handleCheck("customer")}
                color={customer ? "#4CAF50" : undefined}
                className="w-4 h-4 rounded-full"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-gray-200 flex-row justify-between items-center text-white p-4 h-24 w-full rounded-md my-2"
              onPress={() => handleCheck("vendor")}
            >
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/ecommerce-9d7c8.appspot.com/o/Online%20Groceries-bro.png?alt=media&token=00948122-bb4b-4936-a549-f4212112a4e6",
                }}
                className="h-full w-12 object-cover"
              />

              <Text className="text-center font-bold">Sell Foodstuufs</Text>

              <Checkbox
                value={vendor}
                onValueChange={() => handleCheck("vendor")}
                color={vendor ? "#4CAF50" : undefined}
                className="w-4 h-4 rounded-full"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-green-600 w-full   p-4 rounded my-2"
              onPress={() => {
                if (customer) {
                  navigation.navigate("CreateUser");
                } else if (vendor) {
                  navigation.navigate("CreateVendor");
                }
              }}
            >
              <Text className="text-center text-white font-bold">
                Create an account
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center gap-x-2">
              <Text className="text-sm font-light">
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (customer) {
                    navigation.navigate("CreateUser");
                  } else if (vendor) {
                    navigation.navigate("CreateVendor");
                  }
                }}
              >
                <Text className="text-sm font-semibold text-green-600">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
