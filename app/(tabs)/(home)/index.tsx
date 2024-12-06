import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";

//Todo Insert Dynamic route in this page

export default function HomeScreen() {
  return (
    <SafeAreaView className="max-h-full flex flex-grow items-center align-middle pb-8 mx-4">
      <View className="flex-grow justify-center">
        <Text className="text-md">Calorie Count</Text>
        <Text className="text-8xl">00000</Text>
        <View className="text-md">
          <Text>Daily Range</Text>
          <ProgressBar />
        </View>
      </View>
      <View className="flex-grow align-middle justify-center">
        <Text className="text-2xl">Macros</Text>
        <View>
          <View>
            <Text>Protein</Text>
            <ProgressBar />
          </View>
          <View>
            <Text>Fats</Text>
            <ProgressBar />
          </View>
          <View>
            <Text>Carbohydrates</Text>
            <ProgressBar />
          </View>
          <View>
            <Text>Fibre</Text>
            <ProgressBar />
          </View>
        </View>
      </View>
      <CustomButton onPress={undefined} />
    </SafeAreaView>
  );
}
