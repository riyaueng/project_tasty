import { useRef } from "react"
import { useMeals } from "../../functions/Functions"
import type { Meal } from "../../interfaces/Interfaces"
import gsap from "gsap"

type FavoriteButtonProps = { meal: Meal }

export default function FavoriteButton({ meal }: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useMeals()
  const active = meal ? isFavorite(meal.idMeal) : false
  const heartRef = useRef<HTMLButtonElement>(null)

  return (
    <button
      ref={heartRef}
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (meal) {
          toggleFavorite(meal)

          if (heartRef.current) {
            const tl = gsap.timeline()
            tl.to(heartRef.current, { scale: 1.3, duration: 0.2, ease: "power1.inOut" })
            tl.to(heartRef.current, { scale: 1, duration: 0.2, ease: "power1.inOut" })
          }
        }
      }}
      className={[
        "absolute top-10 right-2 z-10 rounded-md px-2 py-1 text-sm backdrop-blur",
        active ? "bg-red-600 text-white border-red-600" : "bg-white/80 hover:bg-white",
      ].join(" ")}
      aria-pressed={active}>
      {active ? "♥" : "♡"}
    </button>
  )
}
