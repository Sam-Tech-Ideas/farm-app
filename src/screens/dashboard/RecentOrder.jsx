import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const RecentOrder = () => {
  return (
    <View className="border border-gray-200 m-2 p-4 rounded">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold">Recent Orders</Text>
        <TouchableOpacity>
        <Text className="text-sm">View all</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default RecentOrder