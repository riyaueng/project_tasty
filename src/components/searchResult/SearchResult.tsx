import React from "react"
import { useMeals } from "../../functions/Functions"
import MealLink from "../mealLink/MealLink"

export default function SearchResult() {
  const { query, meals } = useMeals()
  if (query.trimEnd().length === 0) return null

  return (
    <>
      {meals.length === 0 && <p className="text-center text-gray-400">NO „{query}“ </p>}
      {meals.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {meals.map((meal, index) => (
            <MealLink
              key={meal.idMeal}
              link={`/meal/${meal.idMeal}`}
              linkName={meal.strMeal}
              img={meal.strMealThumb}
              index={index}
              meal={meal}
            />
          ))}
        </div>
      )}
    </>
  )
}
