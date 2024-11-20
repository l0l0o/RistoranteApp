import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const allMeals = () => {
  // Utilisation du useState afin de stocker les valeurs depuis l'API
  const [meals, setMeals] = useState([]);

  const singleMeal = (id: number) => {
    router.push(`/meals/${id}`);
  };

  // Utilisation d'un useEffect lors du fetch pour éviter que l'appel soit fait en boucle
  // et ainsi éviter un re-render infini
  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=",
      );
      const meals = await mealsJson.json();
      setMeals(meals.meals);
    })();
  }, []);

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={meals}
        keyExtractor={(meal) => meal.idMeal.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => singleMeal(item.idMeal)}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.mealTitle}>{item.strMeal}</Text>
            </TouchableOpacity>
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
