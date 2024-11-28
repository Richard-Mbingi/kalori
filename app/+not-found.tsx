import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist" }} />
      <View className="flex-1 justify-center align-middle">
        <Link href="/" className="text-blue-400 underline">Go to Home Screen</Link>
      </View>
    </>
  );
}
