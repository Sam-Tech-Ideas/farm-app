import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const OrderScreen = () => {
  const links = [
    { title: "Home", icon: "home-outline", link: "Home" },
    { title: "Cart", icon: "cart-outline", link: "Cart" },
    { title: "Categories", icon: "grid-outline", link: "Categories" },
  ];

  const handleLogout = () => {
    //logout logic here
    
  };
  return (
 
        <SafeAreaView className="p-4 bg-white h-screen">
          <FlatList
            className="mt-8"
            data={links}
            renderItem={({ item }) => (
              <TouchableOpacity className="flex-row rounded items-center py-2 justify-between">
                <View className="h-20 bg-orange-100 gap-1 w-full flex-row items-center p-4 ">
                  <Avatar.Text size={44} label="XD" />

                  <View className="flex-col gap-1">
                    <Text className="font-bold">Kylesams</Text>
                    <Text>kumasi, Ghana</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
   
  );
};

export default OrderScreen;
