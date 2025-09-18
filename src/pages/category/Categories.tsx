import { Link, useParams } from "react-router"
import { useEffect } from "react"
import { useMeals } from "../../functions/Functions"
import MealLink from "../../components/mealLink/MealLink"

export default function Categories() {
  const { name } = useParams<{ name: string }>()
  const { category, meals, fetchCategories, fetchMealsByCategories } = useMeals()

  useEffect(() => {
    if (category.length === 0) {
      void fetchCategories()
    }
  }, [category.length])

  useEffect(() => {
    if (!name) return
    void fetchMealsByCategories(name)
  }, [name])

  if (!name) {
    return "404 Error"
  }

  return (
    <>
      {category.map((c) => {
        return (
          <>
            <Link key={c.idCategory} to={`/category/${c.strCategory}`}>
              {c.strCategory}
            </Link>
          </>
        )
      })}

      {meals.map((m) => {
        return (
          <>
            <MealLink key={m.idMeal} link={`/meal/${m.idMeal}`} linkName={m.strMeal} img={m.strMealThumb} />
          </>
        )
      })}
    </>
  )
}
