import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    // La stack référence toutes les pages (screens) créées pour pouvoir naviguer dessus
    // via l'utilisation du router
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Accueil", headerShown: false }}
      />
      <Stack.Screen
        name="meals/index"
        options={{ title: "All meals", headerShown: false }}
      />
    </Stack>
  );
}
