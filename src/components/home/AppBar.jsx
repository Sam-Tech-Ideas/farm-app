import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Badge } from "react-native-paper";

import { useSelector } from "react-redux";
const AppBar = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <View className="flex-row items-center justify-between ">
      <View className="flex-col  ">
        <Text className="">
          Delivering to
        </Text>

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
        <Badge>{cartItems.length}</Badge>
        <TouchableOpacity
          className="relative"
          onPress={() => navigation.navigate("Cart")}
        >
          <Ionicons name="cart-outline" size={34} color="black" className="" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;
