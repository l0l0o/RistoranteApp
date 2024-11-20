import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function cocktailDetailScreen() {
  const [meals, setMeals] = useState([]);

  const { query } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "http://www.themealdb.com/api/json/v1/1/search.php?s=" + query,
      );
      //changement de l'adresse pour récupérer une recette via son id
      const meals = await mealsJson.json();
      setMeals(meals.meals);
    })();
  }, []);

  // La page est nommé [id] afin de pouvoir récupérer celui-ci en paramètre pour transférer une information depuis
  // un autre screen
  const singleMeal = (id: number) => {
    router.push(`/meals/${id}`);
  };

  return (
    <View style={styles.screen}>
      {!meals ? (
        <Text>Dommage no meals</Text>
      ) : (
        <View>
          <Text style={styles.title}>
            {meals.length}{" "}
            {meals.length > 1 ? "plats trouvés" : "Aucun plat trouvé"}
          </Text>
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
                  <Image
                    source={{ uri: item.strMealThumb }}
                    style={styles.image}
                  />
                  <Text style={styles.mealTitle}>{item.strMeal}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
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
    width: 150,
  },

  card: {
    marginBottom: 20,
    marginTop: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
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
