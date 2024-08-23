import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Paystack } from "react-native-paystack-webview";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../../config";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config";

const Checkout = ({ navigation }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [receiverContact, setReceiverContact] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const paystackWebViewRef = useRef(null);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handlePaymentSuccess = async (res) => {
    try {
      setLoading(true);
      const orderData = {
        id: "suyfguywefy8935293745982",
        items: cartItems,
        deliveryAddress,
        receiverContact,
        receiverName,
        totalAmount,
        status: "pending",
        createdAt: new Date().toISOString(),
      };
      const orderId = "90237092375JDFBEBJHEBR";
      await setDoc(
        doc(
          db,
          "orders",

          orderId
        ),
        orderData
      );

      setLoading(false);
      navigation.navigate("Cart");
    } catch (error) {
      setError("Failed to save order details. Please try again.");
      setLoading(false);
      console.error("Error saving order details to Firestore:", error);
    }
  };
  return (
    <SafeAreaView className="p-4 bg-white h-screen">
      <Text className="">Delivery Address</Text>
      <View className="p-2 border-orange-600 border my-4 h-10 rounded-lg ">
        <TextInput
          placeholder="Enter delivery address"
          className="px-2"
          value={deliveryAddress}
          onChangeText={setDeliveryAddress}
        />
      </View>

      <Text className="">Receiver's contact</Text>
      <View className="p-2 border-orange-600 border my-4 h-10 rounded-lg ">
        <TextInput
          placeholder="Enter receiver's contact"
          className="px-2"
          value={receiverContact}
          onChangeText={setReceiverContact}
        />
      </View>

      <Text className="">Receiver's full name</Text>
      <View className="p-2 border-orange-600 border my-4 h-10 rounded-lg ">
        <TextInput
          placeholder="Enter receiver's full name"
          className="px-2"
          value={receiverName}
          onChangeText={setReceiverName}
        />
      </View>
      <Text className="">Receiver's email</Text>
      <View className="p-2 border-orange-600 border my-4 h-10 rounded-lg ">
        <TextInput
          placeholder="Enter receiver's email"
          className="px-2"
          value={receiverName}
          onChangeText={setReceiverName}
        />
      </View>

      <View>
        <Text className="font-bold">Summary</Text>
      </View>
      <View className="flex-row  items-center justify-between py-2">
        <Text className=" text-gray-400">Subtotal</Text>
        <Text className=" font-bold">GHS {totalAmount.toFixed(2)}</Text>
      </View>
      <View className="flex-row  items-center justify-between py-2">
        <Text className=" text-gray-400">Delivery</Text>
        <Text className=" ">Free</Text>
      </View>

      <SafeAreaView>
        <Text className="font-bold text-lg">Items</Text>
        {cartItems.length === 0 ? (
          <Text>No items in the cart.</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="flex-row gap-2 my-2 border-gray-200 border-b pb-4 ">
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
            )}
          />
        )}
      </SafeAreaView>

      <Paystack
        paystackKey="pk_test_b19fb24f73df146796bbab6916a774c19108a72a"
        billingEmail="as@gmail.com"
        amount={totalAmount}
        className="bg-green-700 py-4 rounded "
        onCancel={(e) => {
          setError("Payment was canceled.");
        }}
        onSuccess={handlePaymentSuccess}
        currency="GHS"
        ref={paystackWebViewRef}
        channels={["card", "ussd", "bank_transfer", "qr", "mobile_money"]}
      />

      <TouchableOpacity
        className="bg-green-700 text-white py-4 rounded "
        onPress={() => paystackWebViewRef.current.startTransaction()}
      >
        <Text className="text-white text-center ">Pay Now</Text>
      </TouchableOpacity>

      {loading && <Text>Loading...</Text>}
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </SafeAreaView>
  );
};

export default Checkout;
