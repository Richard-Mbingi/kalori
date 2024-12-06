import { Stack } from "expo-router";
import React from "react";

function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="food_details" />
    </Stack>
  );
}

export default HomeLayout;
