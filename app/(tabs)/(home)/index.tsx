import { Link } from "expo-router";
import { Text, View } from "react-native";

//Todo Insert Dynamic route in this page

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center align-middle">
      <Text className="text-2xl">
        This is the home screen with dynamic routes
      </Text>
      <Link href="/food_description/1"></Link>
      <Link
        href={{ pathname: "/food_description/[id]", params: { id: "bacon" } }}
      >
        View details
      </Link>
      <Link
        href={{ pathname: "/food_description/[id]", params: { id: "eggs" } }}
      >
        View details
      </Link>
    </View>
  );
}
