import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { db } from "../../config";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";

const StoreScreen = ({ route, navigation }) => {
  const [store, setStore] = useState(null);

  const [products, setProducts] = useState([]);

  const { storeId } = route.params;

  
    

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const storeRef = doc(db, "stores", storeId);
        const storeSnap = await getDoc(storeRef);
        if (storeSnap.exists()) {
          setStore({ ...storeSnap.data(), id: storeSnap.id });
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  if (!store) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="h-screen  bg-white">
      <ImageBackground
        source={{
          uri: store.logo,
        }}
        className="h-60 w-full   "
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
            <View className="flex-row items-center gap-x-2 mt-2 justify-between">
              <View className="flex-row items-center gap-x-2">
                <Text className="text-xs font-bold">{store.name}</Text>
                <MaterialIcons name="verified" size={18} color="#2e81ff" />
              </View>
            </View>

            <View className="flex-row items-center gap-x-2 mt-2  ">
              <View className="flex-row items-center gap-x-2 rounded bg-red-100 w-3/5 h-8">
                <MaterialIcons name="map" size={18} color="red" />

                <Text className="text-xs font-light">{store.address}</Text>
              </View>

              <View className="flex-row items-center gap-x-2 w-32 rounded bg-green-100 h-8 ">
                <Text className="font-light text-xs ">8:00am - 5:00pm</Text>
              </View>
            </View>
          </View>
          <Text className="text-xs font-light text-gray-900 py-4 bg-blue-100 my-8 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            cupiditate? Modi eius est eveniet incidunt velit veritatis a
            perferendis, aliquam debitis illo maxime nulla mollitia laborum
            similique labore. Voluptatum, est.
          </Text>
        </View>

        <View className="flex-col p-4">
          <Text className="font-semibold text-lg">Products</Text>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row px-4 items-center gap-x-6 justify-center my-4">
              <Text className="px-6 rounded-full border border-red-500 py-1  bg-red-100">
                <Text className="text-sm ">All</Text>
              </Text>

              <Text className="px-6 rounded-full  py-1  bg-gray-100">
                <Text className="text-sm ">Vegetables</Text>
              </Text>
              <Text className="px-6 rounded-full  py-1  bg-gray-100">
                <Text className="text-sm ">Fruits</Text>
              </Text>
              <Text className="px-6 rounded-full  py-1  bg-gray-100">
                <Text className="text-sm ">Meat</Text>
              </Text>
              <Text className="px-6 rounded-full  py-1  bg-gray-100">
                <Text className="text-sm ">Nut</Text>
              </Text>
            </View>
          </ScrollView>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row items-center gap-x-1 w-full">
              {products.map((product) => (
                <TouchableOpacity
                  key={product.id}
                  className="h-48 w-36 rounded-lg shadow-lg m-2"
                  onPress={() => {
                    navigation.navigate("Details", { productId: product.id });
                  }}
                >
                  <Image
                    source={{
                      uri: product.image,
                    }}
                    className="w-full h-full object-cover"
                  />
                  <View className="flex-row items-center justify-between p-2">
                    <Text className="text-sm font-bold">{product.name}</Text>
                    <Text className="text-sm font-light text-gray-400">
                      {product.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;
