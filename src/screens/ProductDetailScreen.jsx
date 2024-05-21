import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";


const ProductDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView className="h-screen ">
      <ImageBackground
        source={{
          uri: "https://blog.jungseed.com/wp-content/uploads/2020/05/Main-scaled.jpg",
        }}
        className="h-80 w-full   "
      >
        <View className=" bg-opacity-50  flex-row justify-between m-4 ">
          <TouchableOpacity className="bg-white rounded-full p-2" onPress={
            () => {
              navigation.goBack()
            }
          
          }>
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
              <Text className="font-semibold text-lg ">Green pepper</Text>
              <View className="flex-row items-center gap-x-2 mt-1 border-2 w-16 bg-green-100 border-green-600 rounded-full">
                <Text className="text-xs font-light py-1">In stock</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-x-2 mt-2 justify-between">
              <View className="flex-row items-center gap-x-2">
                <Text className="text-xs font-light">Zeto Shop</Text>
                <MaterialIcons name="verified" size={18} color="#2e81ff" />
              </View>

              <View>
                <Text className="font-semibold text-sm ">GHC 5.00</Text>
              </View>
            </View>
          </View>
          <Text className="text-xs font-light text-gray-900 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            cupiditate? Modi eius est eveniet incidunt velit veritatis a
            perferendis, aliquam debitis illo maxime nulla mollitia laborum
            similique labore. Voluptatum, est.
          </Text>

          <TouchableOpacity className="bg-transparent p-4 flex-row gap-x-2 border-green-600 border rounded-lg justify-center items-center">
            <Text className="text-green-600 font-semibold">View store</Text>
            <AntDesign name="arrowright" size={18} color="green" />
          </TouchableOpacity>
        </View>

        <View className="flex-col p-4">
          <Text className="font-semibold text-lg">Recommended for you</Text>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row items-center gap-x-1 w-full">
              <View className=" h-48 w-36 rounded-lg shadow-lg m-2 ">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
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
              <View className=" h-48 w-36 rounded-lg shadow-lg m-2 ">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
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
              <View className=" h-48 w-36 rounded-lg shadow-lg m-2 ">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
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
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View
        className="flex-row justify-between absolute 
             items-center p-4 h-20 py-4 bg-white bottom-5 w-full"
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
}

export default ProductDetailScreen