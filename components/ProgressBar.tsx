import { useEffect, useState } from "react";
import { Animated, View } from "react-native";

export default function ProgressBar() {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View className="h-5 bg-slate-300 rounded-full m-2">
      <Animated.View className="h-5 bg-slate-800 rounded-full" />
    </View>
  );
}
