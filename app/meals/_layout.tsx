import { Stack } from "expo-router";

export default function MealsLayout() {
  return (
    // La stack référence toutes les pages (screens) créées pour pouvoir naviguer dessus
    // via l'utilisation du router
    <Stack>
      <Stack.Screen
        name="details/[id]"
        options={{ title: "Meal", headerShown: false }}
      />
      <Stack.Screen
        name="search/[query]"
        options={{ title: "Query meals", headerShown: false }}
      />
      <Stack.Screen
        name="search/random"
        options={{ title: "Random Meal", headerShown: false }}
      />
    </Stack>
  );
}
