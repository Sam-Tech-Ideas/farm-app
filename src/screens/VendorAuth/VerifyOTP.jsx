import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from "@react-native-firebase/auth";

const VerifyOTP = ({ route, navigation }) => {
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(route.params.confirm);

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      // If successful, navigate to the desired screen
      navigation.navigate("Product");
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  return (
    <SafeAreaView className="h-full flex justify-center p-4 bg-white">
      <Text className="text-lg font-bold text-center">Verify OTP</Text>
      <View className="flex flex-col mt-4">
        <Text className="text-sm">Enter OTP</Text>
        <View className="bg-gray-100 py-3 my-3 rounded-lg border border-gray-400">
          <TextInput
            placeholder="123456"
            className="px-2"
            onChangeText={(text) => setCode(text)}
            value={code}
            inputMode="numeric"
          />
        </View>
        <Button title="Verify" onPress={confirmCode} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;
