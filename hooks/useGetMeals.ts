import { useEffect, useState } from "react";

const useGetMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealsJson.json();
      setMeals(meals.meals);
    })();
  }, []);

  return meals;
};

export default useGetMeals;
