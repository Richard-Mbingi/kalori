import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";


export default function SignInScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center align-middle">
      <Text>{id} Details</Text>
    </View>
  );
}
