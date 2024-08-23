import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/slices/cartSlice";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity({ id: itemId }));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity({ id: itemId }));
  };

  return (
    <SafeAreaView className="p-4 bg-white h-full">
      <View className=" ">
        {cartItems.length === 0 ? (
          <View className="w-full h-full flex-col items-center justify-center">
            <Image
              source={require("../../assets/bask.jpg")}
              width={600}
              height={200}
              className="w-40 h-40 object-cover "
            />
            <Text className="text-center w-full flex-row items-center justify-center  text-lg">
              No items in the cart.
            </Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="flex-row justify-between  my-2 border-gray-200 border-b pb-4 ">
                <View className="flex-row items-center gap-x-1">
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      className="rounded-xl"
                      style={{ width: 100, height: 100 }}
                    />
                  </View>
                  <View className="gap-2">
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <View className="flex-row items-center">
                      <Text className="font-bold">GHS {item.price}</Text>
                    </View>
                    <Text className="text-gray-500 text-xs">
                      {item.store.name}
                    </Text>
                    <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                      <Text style={{ color: "red" }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="justify-end">
                  <View className="flex-row items-center gap-x-2">
                    <TouchableOpacity
                      className="p-1 rounded bg-green-600"
                      onPress={() => handleDecreaseQuantity(item.id)}
                    >
                      <FontAwesome
                        name="minus"
                        className=""
                        size={14}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity
                      className="p-1 rounded bg-green-600"
                      onPress={() => handleIncreaseQuantity(item.id)}
                    >
                      <FontAwesome
                        name="plus"
                        className=""
                        size={14}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>

      {/* <View className="absolute bottom-4 ml-4 p-4  py-4 w-full bg-white">
        <TouchableOpacity
          className="bg-green-700 gap-x-2 ml-8 rounded p-2 h-12 items-center flex-row justify-center"
          onPress={() => {
            navigation.navigate("Checkout");
          }}
        >
          <Text className="text-white">
            Checkout Total: GHS{" "}
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default CartScreen;
