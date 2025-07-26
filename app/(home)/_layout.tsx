import { Tabs } from "expo-router";

export default function HomeGroupScreen() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="names"
        options={{
          title: "Names",
        }}
      />
    </Tabs >
  )
}