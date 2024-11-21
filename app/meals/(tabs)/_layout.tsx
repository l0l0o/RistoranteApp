import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MealsLayout() {
  return (
    // La stack référence toutes les pages (screens) créées pour pouvoir naviguer dessus
    // via l'utilisation du router
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "All meals",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "airplane" : "airplane-outline"}
              size={24}
              color="#29572B"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: "Random Meal",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "dice" : "dice-outline"}
              size={24}
              color="#29572B"
            />
          ),
        }}
      />
    </Tabs>
  );
}
