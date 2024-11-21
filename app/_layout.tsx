import { NavigationContainer } from "@react-navigation/native";
import { Stack, Tabs } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ParametersScreen from "./user/ParametersScreen";
import UserScreen from "./user/UserScreen";

export default function TabLayout() {
  const Drawer = createDrawerNavigator();
  return (
    // La stack référence toutes les pages (screens) créées pour pouvoir naviguer dessus
    // via l'utilisation du router
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Accueil",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="meals"
        options={{
          title: "Meals",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="user"
        options={{
          title: "Utilisateur",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
