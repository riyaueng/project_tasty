import { Link } from "react-router"
import type { Meal } from "../../interfaces/Interfaces"
import { useMeals } from "../../functions/Functions"

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

  return (
    <div
      className={["relative border rounded-md overflow-hidden shadow-sm hover:shadow-md transition", className].join(
        " "
      )}>
      <Link to={link} className="block">
        {img && <img src={img} alt={linkName} className={imgClassName} />}
      </Link>

      {meal && (
        <button
          type="button"
          title={active ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
          className={[
            "absolute top-2 right-2 z-10 rounded-md border px-2 py-1 text-sm backdrop-blur",
            active ? "bg-red-600 text-white border-red-600" : "bg-white/80 hover:bg-white",
          ].join(" ")}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleFavorite(meal)
          }}>
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
