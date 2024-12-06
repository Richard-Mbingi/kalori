import FoodCard from "@/components/FoodCard";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
  return (
    <SafeAreaView className="max-h-full mx-4 pb-8 gap-y-4">
      <Text className="text-3xl font-semibold">Food History</Text>
      <View className="gap-3">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
