import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center align-middle">
      <Text className="text-2xl">This is the home screen</Text>
      <Link href="/food-details" className="text-blue-400 underline">Go to Food Details</Link>
    </View>
  );
}