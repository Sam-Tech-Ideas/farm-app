import {
  View,
  Text,
  FlatList,
  TextInput,
  CheckBox,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

import AsyncStorage from "@react-native-async-storage/async-storage";


const CreateUser = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [isChecked, setChecked] = useState(false);
  const [phone, setPhone] = useState("")

  return (
    
        <SafeAreaView className=" h-full flex justify-center  bg-white  p-4">
          <Text className="text-lg font-bold text-center">Create Account</Text>

          <View className="flex flex-col mt-4">
            <Text className="text-sm">Phone</Text>

            <View className="bg-gray-100 py-3 my-3 rounded-lg border border-gray-400">
              <TextInput
                placeholder="+233"
                className="px-2"
                onChangeText={(text) => setPhone(text)}
                value={phone}
                inputMode="numeric"
                
              />
            </View>

            <TouchableOpacity
              className="bg-green-700 w-full   p-4 rounded my-2"
              onPress={() => navigation.navigate("Product")}
            >
              <Text className="text-center text-white font-bold">
              Verify Phone
              </Text>
            </TouchableOpacity>
          </View>

          {/* <AuthButton title="Sign up" classN="bg-green-700" /> */}

          <View className="flex flex-row justify-center mt-4 items-center">
            <Text className="text-sm font-semibold">I'm a vendor?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateVendor")}>
              <Text className="text-green-500  ml-1">Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    
  );
};

export default CreateUser;



