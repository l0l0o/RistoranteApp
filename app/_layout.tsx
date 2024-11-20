import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    // La stack référence toutes les pages (screens) créées pour pouvoir naviguer dessus
    // via l'utilisation du router
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: "Accueil",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
