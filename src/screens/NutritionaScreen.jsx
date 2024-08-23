import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

const NutritionaScreen = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "AIzaSyCa_tb_AmvqAVn8Qv_5z2cQi7BIC70e9GM";


  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
          {
            contents: [
              {
                parts: [{ text: "Nutritional value for carrot" }],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("API Response:", response.data);

        if (
          response.data &&
          response.data.candidates &&
          response.data.candidates.length > 0
        ) {
          const contentParts = response.data.candidates[0].content.parts;
          setResult(contentParts);
          console.log("Generated content parts:", contentParts);
        } else {
          throw new Error("No content generated");
        }
      } catch (error) {
        setError(error);
        console.error("Error generating content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);


  

  return (
    <SafeAreaView className="p-4">
      <FlatList
      showsVerticalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => (
          <>
            <Text className="text-xl font-bold text-green-600">
              Nutritional Data
            </Text>

            <View>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : error ? (
                <Text>An error occurred: {error.message}</Text>
              ) : result ? (
                result.map((part, index) => (
                  <Text key={index}>{part.text}</Text>
                ))
              ) : (
                <Text>No content generated yet</Text>
              )}
            </View>
          </>
        )}
        keyExtractor={(item) => item.text}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
};

export default NutritionaScreen;
