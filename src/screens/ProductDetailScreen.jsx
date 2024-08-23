import { FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../config";
import RelatedProducts from "../components/home/RelatedProducts";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          setProduct({ ...productSnap.data(), id: productSnap.id });
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchProductDetails();
    
  }, [productId]);

  if (!product) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="h-screen ">
      <ImageBackground
        source={{
          uri: product.image,
        }}
        className="h-80 w-full   "
      >
        <View className=" bg-opacity-50  flex-row justify-between m-4 ">
          <TouchableOpacity
            className="bg-white rounded-full p-2"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back-outline"
              className=""
              size={18}
              color="green"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full p-2">
            <Ionicons name="share-outline" size={18} color="green" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-col p-4">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="font-semibold text-lg ">{product.name}</Text>
              <View className="flex-row items-center gap-x-2 mt-1 border-2 w-16 bg-green-100 border-green-600 rounded-full">
                <Text className="text-xs font-light py-1">In stock</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-x-2 mt-2 justify-between">
              <View className="flex-row items-center gap-x-2">
                <Text className="text-xs font-light">
                  {product.merchant.name}
                </Text>
                <MaterialIcons name="verified" size={18} color="#2e81ff" />
              </View>

              <View>
                <Text className="font-semibold text-sm ">
                  GHC {product.price}.00
                </Text>
              </View>
            </View>
          </View>
          <Text className="text-xs font-light text-gray-900 py-4">
            {product.description.length > 150
              ? product.description.substring(0, 150) + "..."
              : product.description}
          </Text>

          <TouchableOpacity
            className="bg-transparent p-4 flex-row gap-x-2 border-green-600 border rounded-lg justify-center items-center"
            onPress={() => {
              navigation.navigate("Store", { storeId: product.store.id });
            }}
          >
            <Text className="text-green-600 font-semibold">View store</Text>
            <AntDesign name="arrowright" size={18} color="green" />
          </TouchableOpacity>
        </View>

        <View className="flex-col p-4">
          <Text className="font-semibold text-lg">Recommended for you</Text>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RelatedProducts/>
          </ScrollView>
        </View>
      </ScrollView>

      <View
        className="flex-row justify-between 
             items-center p-4 h-20 py-4 bg-white  w-full"
      >
        <View>
          <View className="flex-row items-center gap-x-2">
            <View className=" bg-gray-100 rounded p-1">
              <FontAwesome6 name="minus" size={18} color="green" />
            </View>
            <Text className="text-green-600 text-xl font-semibold">1</Text>
            <View className=" bg-gray-100 rounded p-1">
              <FontAwesome6 name="plus" size={18} color="green" />
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="bg-green-600 gap-x-2 rounded p-2 h-10 items-center w-3/4
              flex-row justify-center"
        >
          <Text className="text-white">Add to basket</Text>
          <MaterialCommunityIcons
            name="basket-outline"
            size={18}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
