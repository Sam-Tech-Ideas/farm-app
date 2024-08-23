import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


const ProfileScreen = () => {

    const links = [
        { title: "Home", icon: "home-outline" ,link:"Home"},
        { title: "Cart", icon: "cart-outline", link:"Cart" },
        { title: "Categories", icon: "grid-outline", link:"Categories" },
      
    ]

    const handleLogout = ()=>{

      //logout logic here
      
    }
  return (
    <FlatList
      data={[""]}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <SafeAreaView className="p-4 bg-white h-screen">
          <View className="h-20 bg-orange-100 gap-1 w-full flex-row items-center p-4 ">
            <Avatar.Text size={44} label="XD" />

            <View className="flex-col gap-1">
              <Text className="font-bold">Kylesams</Text>
              <Text>kumasi, Ghana</Text>
            </View>
          </View>

          <FlatList
            className="mt-8"
            data={links}
            renderItem={({ item }) => (
              <TouchableOpacity className="flex-row gap-2 items-center py-2 justify-between">
                <View className="flex-row items-center gap-2">
                  <View>
                    <Ionicons name={item.icon} size={24} color="green" />
                  </View>
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                </View>

                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color="gray"
                  />
                </View>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
           onPress={""}
          className="flex-row items-center pt-12 m-2 justify-between">
            <Text>Logout</Text>

            <View>
              <Ionicons name="log-out-outline" size={24} color="red" />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    />
  );
}

export default ProfileScreen