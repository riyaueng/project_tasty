import { Link } from "react-router"
import type { Meal } from "../../interfaces/Interfaces"
import { useMeals } from "../../functions/Functions"
import { useRef } from "react"
import gsap from "gsap"

TODO styling anpassen
// Todo styling anpassen

interface MealLinkProps {
  link: string
  linkName: string
  img?: string
  description?: string
  className?: string
  imgClassName?: string
  meal?: Meal
}

export default function MealLink({
  link,
  linkName,
  img,
  description,
  className = "",
  imgClassName = "aspect-square object-cover",
  meal,
}: MealLinkProps) {
  const { toggleFavorite, isFavorite } = useMeals()
  const active = meal ? isFavorite(meal.idMeal) : false
  const heartRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      className={["relative border rounded-md overflow-hidden shadow-sm hover:shadow-md transition", className].join(
        " "
      )}>
      <Link to={link} className="block">
        {img && <img src={img} alt={linkName} className={imgClassName} loading="lazy" />}
      </Link>

      {meal && (
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
            "absolute top-2 right-2 z-10 rounded-md border px-2 py-1 text-sm backdrop-blur",
            active ? "bg-red-600 text-white border-red-600" : "bg-white/80 hover:bg-white",
          ].join(" ")}
          aria-pressed={active}>
          {active ? "♥" : "♡"}
        </button>
      )}

      <div className="p-3">
        <h3 className="font-semibold mb-1">{linkName}</h3>
        {description && <p className="text-sm text-gray-600 line-clamp-3">{description}</p>}
      </div>
    </div>
  )
}
