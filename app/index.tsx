import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const meals = await mealsJson.json();
      setMeals(meals.meals);
    })();
  }, []);


  const NumberToShow = 3;
  const newMeals = meals.reverse().slice(0, NumberToShow)

  const singleMeal = (id: number) => {
    router.push(`/meals/${id}`)
  }
  const allMeals = () => {
    router.push(`/meals`)
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.screen}>
        <Image 
          source={ require("../assets/images/logo.png") }
          style={{ height: 75, width: 75 }}
        />
        <Text style={styles.title}>Il Ristorante del Pueblo</Text>
      </View>

      <Text style={styles.description}>
        Ici, tu pourras consulter le menu, passer des commandes, réserver une table et accéder à des offres exclusives, le tout dans une interface simple et intuitive. Une expérience italienne à portée de main.
      </Text>

      <TouchableOpacity onPress={allMeals}>
        <Text style={styles.mealTitle}>Voir tous nos plats</Text>
      </TouchableOpacity>

      <View style={{marginTop: 12}}>
        <Text style={styles.title}>Nos plats du moments</Text>
        <FlatList 
          data={newMeals}           
          keyExtractor={(meal) => meal.idMeal.toString()} 
          renderItem={({ item }) => ( 
            <View style={styles.card}> 
                <TouchableOpacity style={styles.button} onPress={() => singleMeal(item.idMeal)}>
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#29572B",
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "white"
  },

  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    marginTop: 20
  },

  mealTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: "red"
  },

  card: {
    marginBottom: 20, 
    marginTop: 20
  },

  image: {
    width: 124,
    height: 124,
    borderRadius: 8
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
  }
});
