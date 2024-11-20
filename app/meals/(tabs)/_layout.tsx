import { Stack } from "expo-router";

export default function MealsLayout() {
  return (
    // La stack référence toutes les pages (screens) créées pour pouvoir naviguer dessus
    // via l'utilisation du router
    <Stack>
      <Stack.Screen
        name="random"
        options={{ title: "Random Meal", headerShown: false }}
      />
      <Stack.Screen
        name="index"
        options={{ title: "All meals", headerShown: false }}
      />
    </Stack>
  );
}
