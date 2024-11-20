import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function cocktailDetailScreen() {
  const [meal, setMeal] = useState(null);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id,
      );
      //changement de l'adresse pour récupérer une recette via son id
      const meals = await mealsJson.json();
      setMeal(meals.meals[0]);
    })();
  }, []);

  // La page est nommé [id] afin de pouvoir récupérer celui-ci en paramètre pour transférer une information depuis
  // un autre screen

  if (!meal) {
    return <Text>Dommage no meals</Text>;
  }

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: meal?.strMealThumb }} />
      <Text style={styles.mealTitle}>{meal?.strMeal}</Text>
      <Text style={styles.description}>{meal?.strInstructions}</Text>
    </View>
  );
}

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
    width: "100%",
    height: 200,
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
