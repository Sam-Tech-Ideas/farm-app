import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  Image,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config";
import { addItem } from "../../redux/slices/cartSlice";

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      onSnapshot(collection(db, "products"), (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        setProducts(products);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();

  const quantity = 1;

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity }));

    console.log("added");
  };

  return (
    <View>
      <View className="flex-row items-center gap-x-1 w-full">
        {products.map((product, index) => (
          <View className=" h-50 w-36 rounded-lg shadow-lg m-2 " key={index}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", { productId: product.id });
              }}
            >
              <Image
                source={{
                  uri: product.image,
                }}
                className="h-32  object-cover rounded-t-lg"
              />
            </TouchableOpacity>

            <View className="flex-col mt-2">
              <Text className="text-sm font-semibold">{product.name}</Text>
              <Text className="text-xs font-light">{product.store.name}</Text>

              <View className="flex-row items-center justify-between mt-1">
                <Text className="text-sm font-semibold">
                  GHS {product.price}
                </Text>

                <TouchableOpacity
                  className="flex-row items-center bg-green-600  rounded justify-center p-1 "
                  onPress={() => handleAddToCart(product)}
                >
                  <MaterialCommunityIcons
                    name="basket-outline"
                    size={18}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductList;
