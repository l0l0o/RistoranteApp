import { router } from "expo-router";
import React from "react";
import { Text, View, Button, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const meals = [
    {
      id: 1,
      title: "Spaghetti bolognaise",
      description: "Des pâtes avec de la sauce tomate et de la viande hachée",
      image: "https://img.cuisineaz.com/660x660/2016/07/29/i84653-spaghettis-bolognaise-rapides.jpg",
      category: "pasta",
    },
    {
      id: 2,
      title: "Salade César",
      description: "Une salade avec de la salade verte, du poulet, des croûtons et de la sauce César",
      image: "https://rians.com/wp-content/uploads/2024/04/1000038128.jpg",
      category: "salad",
    },
    {
      id: 3,
      title: "Tarte aux pommes",
      description: "Une tarte sucrée avec des pommes",
      image: "https://assets.afcdn.com/recipe/20220128/128250_w1024h1024c1cx1294cy688cxt0cyt0cxb2037cyb1472.webp",
      category: "dessert",
    },
    {
      id: 4,
      title: "Risotto aux champignons",
      description: "Un risotto crémeux avec des champignons",
      image: "https://www.recettes.cuisinefestive.com/wp-content/uploads/2019/09/RISOTTO.jpg",
      category: "pasta",
    },
    {
      id: 5,
      title: "Salade niçoise",
      description: "Une salade avec des tomates, des oeufs, des olives, du thon et des haricots verts",
      image: "https://img.cuisineaz.com/1024x768/2013/12/20/i34581-salade-nicoise-rapide.jpeg",
      category: "salad",
    },
    {
      id: 6,
      title: "Tiramisu",
      description: "Un dessert italien avec du café, des biscuits et du mascarpone",
      image: "https://img.cuisineaz.com/1024x768/2023/11/20/i196570-tiramisu-simple.jpg",
      category: "dessert",
    },
  ];

  const NumberToShow = 3;
  const newMeals = meals.reverse().slice(0,NumberToShow)

  const singleMeal = (id: number) => {
    router.push(`single/${id}`)
  }
  const allMeals = () => {
    router.push(`allMeals`)
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
          keyExtractor={(meal) => meal.id.toString()} 
          renderItem={({ item }) => ( 
            <View style={styles.card}> 
                <TouchableOpacity style={styles.button} onPress={() => singleMeal(item.id)}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                  />
                  <Text style={styles.mealTitle}>{item.title}</Text>
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
