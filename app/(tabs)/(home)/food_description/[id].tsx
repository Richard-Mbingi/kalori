import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function FoodDescription() {
  const { id } = useLocalSearchParams();
  return <Text>Food description of {id}</Text>;
}
