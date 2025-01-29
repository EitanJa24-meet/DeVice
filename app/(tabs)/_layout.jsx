import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Manually specify the files in your desired order */}
      <Tabs.Screen name="Home" options={{ tabBarLabel: "Home" }} />
      <Tabs.Screen name="Events" options={{ tabBarLabel: "Events" }} />
      <Tabs.Screen name="TaskGame" options={{ tabBarLabel: "Task Game" }} />
      <Tabs.Screen name="Profile" options={{ tabBarLabel: "Profile" }} />
    </Tabs>
  );
}

