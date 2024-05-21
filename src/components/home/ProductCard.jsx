

//reusable product card component
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ProductCard = ({ onPress}) => {

    return (
      <View className=" h-48 w-36 rounded-lg shadow-lg m-2 ">
        <TouchableOpacity onPress={

onPress        }>
          <Image
            source={{
              uri: "https://blog.jungseed.com/wp-content/uploads/2020/05/Main-scaled.jpg",
            }}
            className="h-32  object-cover rounded-t-lg"
          />
        </TouchableOpacity>

        <View className="flex-col mt-2">
          <Text className="text-sm font-semibold">Green pepper</Text>
          <View className="flex-row items-center justify-between mt-1">
            <Text className="text-xs font-light">Zeto Shop</Text>
            <TouchableOpacity className="flex-row items-center bg-green-600 justify-center p-1 ">
              <MaterialCommunityIcons
                name="basket-outline"
                size={18}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

export default ProductCard;