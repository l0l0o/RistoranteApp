import { useEffect, useState } from "react";

const useGetRandom = () => {
  const [randomMeal, setrandomMeal] = useState(null);
  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      //changement de l'adresse pour récupérer une recette via son id
      const meals = await mealsJson.json();
      setrandomMeal(meals.meals[0]);
    })();
  }, []);

  return randomMeal;
};

export default useGetRandom;
