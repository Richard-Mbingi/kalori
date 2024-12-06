import {Pressable, Text } from "react-native";

export default function CustomButton(props: { onPress: any; title?: "Add Meal" | undefined; }) {
  const { onPress } = props;

  return (
    <Pressable className="max-w-32 border border-black p-4 items-center" onPress={onPress}>
      <Text>Add a Meal</Text>
    </Pressable>
  );
}
