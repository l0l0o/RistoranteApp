import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";

export default function HomeScreen() {
  const [meals, setMeals] = useState([]);
  const [text, setSearchText] = useState("");

  const NumberToShow = 3;
  const newMeals = [...meals].slice(0, NumberToShow);

  useEffect(() => {
    (async () => {
      const mealsFromJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=",
      );
      const meals = await mealsFromJson.json();
      setMeals(meals.meals);
      newMeals.reverse();
    })();
  }, []);

  const singleMeal = (id: number) => {
    router.push(`/meals/details/${id}`);
  };
  const allMeals = () => {
    router.push(`/meals`);
  };

  const search = (query: string) => {
    query = text;
    router.push(`/meals/search/${query}`);
  };

  const randomMeal = () => {
    router.push(`/meals/random`);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screen}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ height: 75, width: 75 }}
        />
        <Text style={styles.title}>Il Ristorante del Pueblo</Text>
      </View>

      <Text style={styles.description}>
        Ici, tu pourras consulter le menu, passer des commandes, réserver une
        table et accéder à des offres exclusives, le tout dans une interface
        simple et intuitive. Une expérience italienne à portée de main.
      </Text>

      <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          placeholder="Chercher une recette"
          onChangeText={setSearchText}
          value={text}
        />

        <Pressable
          onPress={search}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "white",
            borderRadius: 40,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text>O</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={{ marginTop: 16 }} onPress={allMeals}>
        <Text style={styles.mealTitle}>Voir tous nos plats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 16 }} onPress={randomMeal}>
        <Text style={styles.mealTitle}>La recette surprise</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 12 }}>
        <Text style={styles.title}>Nos plats du moments</Text>
        <FlatList
          style={styles.mealList}
          horizontal={true}
          data={newMeals}
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#29572B",
  },

  input: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 10,
    width: "70%",
    marginTop: 20,
  },

  press: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 24,
    padding: 10,
  },

  mealList: {
    height: "20%",
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
    marginTop: 20,
  },

  mealTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "red",
  },

  card: {
    marginTop: 20,
    marginLeft: 20,
    height: 42,
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
