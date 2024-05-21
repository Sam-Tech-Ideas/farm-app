import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AppBar = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-col  ">
        <Text className=""text-xs>Delivering to</Text>

        <View className="flex-row items-center py-1 gap-x-1 ">
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={18}
            color="red"
          />
          <Text className="text-xs font-semibold">KNUST, Ayeduase</Text>
        </View>
      </View>
      <View>
        <Ionicons name="notifications-outline" size={18} color="green" />
      </View>
    </View>
  );
}

export default AppBar