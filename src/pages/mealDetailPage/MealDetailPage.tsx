import { Link, useParams } from "react-router"
import { useMeals } from "../../functions/Functions"
import type { IMealsDetail } from "../../interfaces/Interfaces"
import { useEffect, useState } from "react"

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
      ingredients.push(`${measure} - ${ing}`)
    }
  }

  return (
    <div>
      <div className="my-10">
        <Link to={`/category/${meal.strCategory}`} className="text-blue border border-green px-4 py-1 rounded-lg">
          ← Zurück
        </Link>
      </div>

      <div className="bg-blue text-white p-20 rounded-3xl">
        <div
          className="w-full h-160 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${meal.strMealThumb})` }}></div>

        <div className="grid grid-cols-[3fr_1fr] gap-20 py-10">
          <div>
            <h2 className="text-4xl mb-5 text-white font-buttons">{meal.strMeal}</h2>
            <p>
              <span className="font-semibold">Category :</span> {meal.strCategory}
            </p>
            <p>
              <span className="font-semibold">Origin :</span> {meal.strArea}
            </p>

            <section className="mt-10">
              <h2 className="text-xl font-bold mb-5 text-white">Instructions</h2>
              <ul className="list-disc list-inside space-y-4">
                {meal.strInstructions
                  ?.split(".")
                  .map((sentence: string) => sentence.trim())
                  .filter((sentence: string) => sentence.length > 0)
                  .map((sentence: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-white">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                      <span className="leading-relaxed">{sentence}.</span>
                    </li>
                  ))}
              </ul>
            </section>
          </div>

          <div>
            <section>
              <h2 className="text-white text-3xl mb-5">Ingredients</h2>
              <ul>
                {ingredients.map((line, i) => (
                  <li className="text-lg" key={i}>
                    {line}
                  </li>
                ))}
              </ul>
            </section>
            <div className="mt-10">
              {meal.strYoutube && (
                <a href={meal.strYoutube} target="_blank" className="bg-white text-blue px-5 py-3.5 rounded-xl">
                  <span className="font-black">Watch on YouTube</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
