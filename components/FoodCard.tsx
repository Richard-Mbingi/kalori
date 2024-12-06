import { Text, View } from "react-native";

export default function FoodCard() {
  return (
    <View className="border border-black p-3">
      <Text className="text-xl font-semibold">Food Title</Text>
      <Text>Calorie Count: 0</Text>
    </View>
  );
}
