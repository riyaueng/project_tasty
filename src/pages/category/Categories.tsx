import { useParams } from "react-router"
import MealLink from "../../components/mealLink/MealLink"
import type { IMeals } from "../../interfaces/Interfaces"
import { useEffect, useState } from "react"
import { api } from "../../api/Api"

export default function Categories() {
  const { name = "" } = useParams<string>()
  const [meals, setMeals] = useState<IMeals[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const list = await api.listByCategory(name)
      setMeals(list)
      setLoading(false)
    })()
  }, [name])

  if (!name) {
    return "404 Error"
  }

  return (
    <>
      <MealLink link={`/meal/${id}`} linkName={name} text={""} img={""} />
    </>
  )
}
