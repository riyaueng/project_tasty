import React, { useEffect } from "react"
import { useMeals } from "../../functions/Functions"
import type { Category } from "../../interfaces/Interfaces"
import MealLink from "../../components/mealLink/MealLink"

export default function Home() {
  const { category, meals, fetchCategories, fetchMealsByCategories } = useMeals()

  useEffect(() => {
    const init = async () => {
      if (category.length === 0) {
        await fetchCategories()
      }
      if (category.length > 0 && meals.length === 0) {
        await fetchMealsByCategories(category[0].strCategory)
      }
    }
    void init()
  }, [category, meals, fetchCategories, fetchMealsByCategories])

  return (
    <div>
      <h1>Test</h1>
      {category.map((c: Category) => {
        return (
          <>
            <MealLink
              link={`/category/${c.strCategory}`}
              linkName={c.strCategory}
              img={c.strCategoryThumb}
              text={c.strCategory}
            />
          </>
        )
      })}
    </div>
  )
}
