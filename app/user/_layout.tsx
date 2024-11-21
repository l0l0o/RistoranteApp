import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

export default function UserLayout() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="parameters"
        component={() => (
          <View>
            <Text>Parameters Screen</Text>
          </View>
        )}
        options={{ title: "Recette" }}
      />
      <Drawer.Screen
        name="index"
        component={() => (
          <View>
            <Text>User Screen</Text>
          </View>
        )}
        options={{ title: "Recherche" }}
      />
    </Drawer.Navigator>
  );
}
