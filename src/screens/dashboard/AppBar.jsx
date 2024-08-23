import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

const AppBar = () => {
  return (
    <View>
      <View className="flex-row  justify-between items-center ">
        <View>
        <Text>
          Hello
          <Text className="font-bold text-md"> Sam Agyei,</Text>
        </Text>
        <Text className="text-xs">Here's how your shop is doing</Text>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

export default AppBar