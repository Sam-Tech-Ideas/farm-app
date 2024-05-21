import { View, Text, TextInput, TouchableOpacity, ImageBackground, FlatList, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/home/AppBar";
import { Octicons } from "@expo/vector-icons";
import deli from '../../assets/uu.jpeg'
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={[0]}
      renderItem={({ item }) => (
        <SafeAreaView className="p-4 bg-white h-screen">
          {/* <Onboarding/> */}
          <AppBar />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Ca");
            }}
            className="bg-gray-100 h-10 rounded  items-center flex-row  px-3 gap-x-2 my-4
      "
          >
            <Octicons name="search" size={18} color="gray" />

            <Text className="text-gray-400">
              Search for products, brands and categories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className=" h-36 my-4 w-full rounded bg-brown-200 flex-row">
            <ImageBackground
              source={deli}
              className=" rounded object-cover object-center w-full"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-50 p-6 justify-center h-26   my-4 w-full rounded bg-brown-200 flex-row">
            <View className="px-2">
              <MaterialCommunityIcons
                name="lightbulb-on"
                size={18}
                color="orange"
              />
            </View>
            <View>
              <Text className="text-md font-semibold ">
                Create your shopping list
              </Text>
              <Text className="text-gray-700 text-xs py-1 ">
                Shopping lists help you recall and prioritize what to buy. We
                will suggest products th at match your list.
              </Text>
            </View>
          </TouchableOpacity>
          <View className="flex-row items-center justify-between">
 <Text className="text-md font-semibold ">Freshly stocked</Text>
          <TouchableOpacity>
            <Text className="text-sm font-light text-green-600">
              See all
            </Text>
            </TouchableOpacity>
          </View>
         
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
        </SafeAreaView>
      )}
    />
  );
};

export default HomeScreen;
