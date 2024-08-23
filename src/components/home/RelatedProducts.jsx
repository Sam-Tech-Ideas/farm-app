import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../../config";
import { collection, onSnapshot } from "firebase/firestore";

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      onSnapshot(collection(db, "products"), (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        setProducts(products);
        console.warn("products", products);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      {
        products.map((product) => (
          <TouchableOpacity
            key={product.id}
            className="flex-row gap-x-2 p-2"
            onPress={() => {
              navigation.navigate("ProductDetail", {
                productId: product.id,
              });
            }}
          >
            <Image
              source={{ uri: product.image }}
              className="w-20 h-20 object-cover"
            />
            <View>
              <Text className="text-sm font-semibold">{product.name}</Text>
              <Text className="text-xs font-light text-gray-900">
                GHC {product.price}.00
              </Text>
            </View>
          </TouchableOpacity>
        )) // End of map function  // End of products.map function  // End of products.map function  // End of products.map function  // End of products.map function  // End of products.map function
      }
    </View>
  );
};

export default RelatedProducts;
