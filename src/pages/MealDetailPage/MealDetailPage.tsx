import { Link, useParams } from "react-router"
import { useMeals } from "../../functions/Functions"
import type { IMealsDetail } from "../../interfaces/Interfaces"
import { useEffect, useState } from "react"

TODO styling anpassen
// Todo styling anpassen

export default function MealDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { getMealDetail } = useMeals()
  const [mealDetail, setMealDetail] = useState<IMealsDetail | null>(null)

  useEffect(() => {
    if (!id) return
    ;(async () => {
      const detail = await getMealDetail(id)
      setMealDetail(detail)
    })()
  }, [id])

  if (!mealDetail) return <div>Lade Details…</div>

  const meal = mealDetail.meals[0] as any

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ing && ing.trim() !== "") {
      ingredients.push(`${ing} – ${measure}`)
    }
  }

  return (
    <div>
      <header>
        <Link to={`/category/${meal.strCategory}`} className="">
          ← Zurück
        </Link>
        <h1>{meal.strMeal}</h1>
      </header>

      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <p>
        <strong>Kategorie:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Herkunft:</strong> {meal.strArea}
      </p>

      <section>
        <h2>Zutaten</h2>
        <ul>
          {ingredients.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Anleitung</h2>
        <p>{meal.strInstructions}</p>
      </section>

      {meal.strYoutube && (
        <a href={meal.strYoutube} target="_blank">
          Zum Kochvideo auf YouTube
        </a>
      )}
    </div>
  )
}
