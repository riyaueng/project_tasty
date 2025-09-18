import { useEffect } from "react"
import { useMeals } from "../../functions/Functions"
import type { Category } from "../../interfaces/Interfaces"
import MealLink from "../../components/mealLink/MealLink"

export default function Home() {
  const { category, meals, fetchCategories, fetchMealsByCategories } = useMeals()

  useEffect(() => {
    if (category.length === 0) {
      void fetchCategories()
    }
  }, [category.length])

  useEffect(() => {
    if (category.length > 0 && meals.length === 0) {
      void fetchMealsByCategories(category[0].strCategory)
    }
  }, [category.length, meals.length])

  return (
    <div>
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
