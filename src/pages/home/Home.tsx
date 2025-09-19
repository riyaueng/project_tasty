import { useEffect } from "react"
import { useMeals } from "../../functions/Functions"
import type { Category } from "../../interfaces/Interfaces"
import MealLink from "../../components/mealLink/MealLink"

// TODO styling anpassen
// FIXME missing key

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
    <>
      <div className="mb-6 mt-10">
        <h2 className="text-4xl font-lightest">Or go through our categories</h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {category.map((c: Category) => {
          return (
            <>
              <div>
                <MealLink
                  key={c.idCategory}
                  link={`/category/${c.strCategory}`}
                  linkName={c.strCategory}
                  img={c.strCategoryThumb}
                />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
