import { useParams } from "react-router"
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

  return (
    <div>
      <h3>{meal.strMeal}</h3>
      <div>
        <h2>Ingredients</h2>
        {/* <ul>{props.ingredients}</ul>
        <a href={props.link} target="_blank"> */}
        {/* Watch on Youtube
        </a> */}
      </div>
    </div>
  )
}
