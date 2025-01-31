import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="magnifying-glass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="phone" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
