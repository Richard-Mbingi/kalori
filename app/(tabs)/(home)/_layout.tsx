import { Stack } from "expo-router";
import React from "react";

function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="food_details" options={{ headerShown: false }}/>
    </Stack>
  );
}

export default HomeLayout;
