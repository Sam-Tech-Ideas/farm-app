import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateVendor = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Create user account using Firebase Authentication
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Step 2: If the user account creation is successful, add the user info to the Firestore database
      if (authUser) {
        const newUser = {
          id: authUser.user.uid,
          title: title,
          name: name,
          phone: phone,
          email: email,
          profileType: "vendor",
        };

        // Add the new user document to the Firestore collection
        await setDoc(doc(db, "users", authUser.user.uid), newUser);

        // Save to AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(newUser));

        // Clear the form inputs after successful user creation
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setTitle("");

        // Show a success message to the user
        Alert.alert("Success", "User created successfully");

        // Redirect the user to the home page
        navigation.navigate("Dashboard");
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView className="h-full flex justify-center p-4 bg-white">
      <Text className="text-lg font-bold text-center">
        Create Business Account
      </Text>
      <View className="flex flex-col mt-4">
        <Text className="text-sm">Business Name</Text>
        <View className="bg-gray-100 py-3 my-3 rounded-lg border border-gray-400">
          <TextInput
            placeholder="Kyle Enterprise"
            className="px-2"
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
        </View>
        <Text className="text-sm">Owner Email</Text>
        <View className="bg-gray-100 py-3 my-3 rounded-lg border border-gray-400">
          <TextInput
            placeholder="Owner Email"
            className="px-2"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <Text className="text-sm">Password</Text>
        <View className="bg-gray-100 py-3 my-3 rounded-lg border border-gray-400">
          <TextInput
            placeholder="Password"
            className="px-2"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
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
          className="bg-green-700 w-full p-4 rounded my-2"
          onPress={handleAddUser}
        >
          <Text className="text-center text-white font-bold">
            Create Business Account
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-center mt-4 items-center">
        <Text className="text-sm font-semibold">I'm a vendor?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-green-500 ml-1">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateVendor;
