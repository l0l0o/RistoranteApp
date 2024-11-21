import useGetMeals from "@/hooks/useGetMeals";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const allMeals = () => {
  // Utilisation du useState afin de stocker les valeurs depuis l'API
  const meals = useGetMeals();

  const singleMeal = (id: number) => {
    router.push(`/meals/details/${id}`);
  };

  const MealActions = () => {
    return (
      <View>
        <Button title="Supprimer" />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={meals}
        keyExtractor={(meal) => meal.idMeal.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Swipeable
              renderRightActions={MealActions}
              style={styles.button}
              onPress={() => singleMeal(item.idMeal)}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.mealTitle}>{item.strMeal}</Text>
            </Swipeable>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 12,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#29572B",
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },

  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },

  mealTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "red",
  },

  card: {
    marginBottom: 20,
    marginTop: 20,
  },

  image: {
    width: 124,
    height: 124,
    borderRadius: 8,
  },

  button: {
    backgroundColor: "white",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    flexDirection: "row",
    gap: 12,
  },
});

export default allMeals;
