import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center align-middle">
      <Text className="text-2xl">This is the home screen</Text>
      <Link
        href={{ pathname: "/details/[id]", params: { id: "eggs" } }}
        className="text-blue-400 underline"
      >
        View food details
      </Link>
      <Link
        href={{ pathname: "/details/[id]", params: { id: "bacon" } }}
        className="text-blue-400 underline"
      >
        View food details
      </Link>
    </View>
  );
}
