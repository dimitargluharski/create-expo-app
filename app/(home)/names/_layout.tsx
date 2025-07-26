import { Stack } from "expo-router";

export default function NamesScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Names",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "User Details",
          headerShown: true,
        }}
      />
    </Stack>
  )
}