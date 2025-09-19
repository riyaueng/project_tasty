import { Link } from "react-router"
import type { Meal } from "../../interfaces/Interfaces"
import { useMeals } from "../../functions/Functions"
import { useRef } from "react"
import gsap from "gsap"

// TODO styling anpassen

interface MealLinkProps {
  link: string
  linkName: string
  img?: string
  description?: string
  className?: string
  imgClassName?: string
  meal?: Meal
  index?: number
}

export default function MealLink({
  link,
  linkName,
  img,
  description,
  className = "",
  imgClassName = "",
  meal,
  index = 0,
}: MealLinkProps) {
  const { toggleFavorite, isFavorite } = useMeals()
  const active = meal ? isFavorite(meal.idMeal) : false
  const heartRef = useRef<HTMLButtonElement>(null)

  const bgColor = index % 2 === 0 ? "bg-green" : "bg-blue"

  return (
    <Link to={link} className="block">
      <div
        className={[
          "relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition",
          bgColor,
          className,
        ].join(" ")}>
        {!meal && (
          <div className="flex flex-col items-center justify-center p-6">
            <h3 className="text-3xl font-semibold text-white">{linkName}</h3>
            {img && <img src={img} alt={linkName} className="w-24 h-24 object-contain mb-4" loading="lazy" />}
          </div>
        )}

        {meal && (
          <>
            <img src={img} alt={linkName} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{linkName}</h3>
              {description && <p className="text-sm text-gray-700 mt-2 line-clamp-3">{description}</p>}
            </div>
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
          </>
        )}

        <div className="p-3">{description && <p className="text-sm text-gray-600 line-clamp-3">{description}</p>}</div>
      </div>
    </Link>
  )
}
