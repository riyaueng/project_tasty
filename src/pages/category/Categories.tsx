import { useLayoutEffect, useRef, useEffect, useState } from "react"
import { useMeals } from "../../functions/Functions"
import MealLink from "../../components/mealLink/MealLink"
import gsap from "gsap"
import { Link, useParams } from "react-router"
import SkeletonCard from "../../components/skeletonCard/SkeletonCard"

// TODO styling anpassen
// FIXME missing key

export default function Categories() {
  const { name } = useParams<{ name: string }>()
  const { category, meals, fetchCategories, fetchMealsByCategories, loading } = useMeals()
  const [showMeals, setShowMeals] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (category.length === 0) void fetchCategories()
  }, [category.length])

  useEffect(() => {
    if (!name) return
    void fetchMealsByCategories(name)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [name])

  useEffect(() => {
    if (meals.length === 0) return
    setShowMeals(false)
    const timer = setTimeout(() => setShowMeals(true), 400)
    return () => clearTimeout(timer)
  }, [meals])

  useLayoutEffect(() => {
    if (!gridRef.current || !showMeals) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".meal-card")
      gsap.set(cards, { autoAlpha: 0, y: 60 })
      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.04,
      })
    }, gridRef)
    return () => ctx.revert()
  }, [showMeals])

  if (!name) return <div>404 Error</div>

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-6 flex-wrap mt-10">
        {category.map((c) => (
          <div key={c.idCategory} className="mb-5">
            <Link to={`/category/${c.strCategory}`} className="py-1 px-5 border border-green rounded-lg text-blue">
              {c.strCategory}
            </Link>
          </div>
        ))}
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading || !showMeals
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : meals.map((m, index) => (
              <MealLink
                key={m.idMeal}
                link={`/meal/${m.idMeal}`}
                linkName={m.strMeal}
                img={m.strMealThumb}
                meal={m}
                className="meal-card"
                index={index}
              />
            ))}
      </div>
    </div>
  )
}
