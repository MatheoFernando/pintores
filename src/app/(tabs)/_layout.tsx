import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import Avatar from "@/components/avatar";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor:theme.colors.gray[900],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor:theme.colors.black

        }
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
        name="search"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
        name="messages"
      />
        <Tabs.Screen
        options={{
          tabBarIcon: ({ color}) => (
            <Avatar selected={color === theme.colors.white } source={{ 
              uri: "https://github.com/MatheoFernando.png"
             }} />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
}
