import { View, Text, StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import CircularProgress from "../../components/shared/ui/CircularProgress";

const Metrics = () => {
   const [progress, setProgress] = useState(5);

   const increaseProgress = () => {
     setProgress((prev) => (prev + 10 > 100 ? 0 : prev + 10));
   };
  const metric = [
    {
      name: "Earnings",
      value: "GHS 1000",
      progress: 0.2,
      icon: "arrow-up-right",
      title: "Total revenue",
    },
    {
      name: "Earnings",
      value: "GHS 1000",
      progress: 0.2,
      icon: "arrow-up-right",
    },
    {
      name: "Earnings",
      value: "GHS 1000",
      progress: 0.2,
    },
    {
      name: "Earnings",
      value: "GHS 1000",
      progress: 0.2,
    },
  ];
  return (
    <View className=" my-2 py-4">
      <View className="flex-row mx-4 w-full   gap-2 justify-center items-center">
        <View className="border border-gray-200 flex-col justify-between rounded-lg p-3 h-28 w-44">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Earnings</Text>
              <Feather name="arrow-up-right" size={24} color="green" />
            </View>

            <Text className="text-xs">Total revenue</Text>
          </View>
          <View className="flex-row justify-between  items-center ">
            <Text className=" text-lg font-bold">GHS 1000</Text>
            <View>
              <Progress.Circle
                size={35}
                progress={0.2}
                showsText={true}
                
                color={"orange"}
                width={35}
              />
            </View>
          </View>
        </View>

        <View className="border border-gray-200 flex-col justify-between rounded-lg p-3 h-28 w-44">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Sales</Text>
              <Feather name="arrow-up-right" size={24} color="green" />
            </View>

            <Text className="text-xs">Total sales</Text>
          </View>
          <View className="flex-row justify-between  items-center ">
            <Text className=" text-lg font-bold">1000</Text>
            <View>
              {/* <Progress.Circle
                size={35}
                progress={0.2}
                showsText={true}
                color={"orange"}
                width={35}
                
              /> */}
              <View style={styles.container}>
                <CircularProgress
                  size={35}
                  strokeWidth={1}
                  progress={progress}
                  textColor={"red"}
                  color="orange"
                  fontSize={8}
                  backgroundColor="orange"
                />

               
              </View>

             
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row mx-4 w-full py-4    gap-2 justify-center items-center">
        <View className="border border-gray-200 flex-col justify-between rounded-lg p-3 h-28 w-44">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Orders</Text>
              <Feather name="arrow-up-right" size={24} color="green" />
            </View>

            <Text className="text-xs">Total revenue</Text>
          </View>
          <View className="flex-row justify-between  items-center ">
            <Text className=" text-lg font-bold">1000</Text>
            <View>
              <Progress.Circle
                size={35}
                progress={0.2}
                showsText={true}
                color={"orange"}
                width={35}
              />
            </View>
          </View>
        </View>

        <View className="border border-gray-200  flex-col justify-between rounded-lg p-3 h-28 w-44">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Customers</Text>
              <Feather name="arrow-up-right" size={24} color="green" />
            </View>

            <Text className="text-xs">Total revenue</Text>
          </View>
          <View className="flex-row justify-between  items-center ">
            <Text className=" text-lg font-bold">1000</Text>
            <View>
              <Progress.Circle
                size={35}
                progress={0.2}
                showsText={true}
                color={"orange"}
                width={35}
              />
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row mx-4 w-full     gap-2 justify-center items-center">
        <View className="border border-gray-200 flex-col justify-between rounded-lg p-3 h-28 w-44">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Total Products</Text>
            </View>
          </View>
          <View className="flex-row justify-between  items-center ">
            <Text className=" text-lg font-bold">GHS 1000</Text>
          </View>
        </View>

        <View className="border border-gray-200  flex-col justify-between rounded-lg p-3 h-28 w-44">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold">Out of stock</Text>
            </View>
          </View>
          <View className="flex-row justify-between  items-center ">
            <Text className=" text-lg font-bold">GHS 1000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Metrics;


