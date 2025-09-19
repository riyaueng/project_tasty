import { useMeals } from "../../functions/Functions"
import type { Meal } from "../../interfaces/Interfaces"

TODO styling anpassen

type Props = { meal: Meal; className?: string }

export default function FavoriteButton({ meal, className = "" }: Props) {
  const { isFavorite, toggleFavorite } = useMeals()
  const active = isFavorite(meal.idMeal)

  return (
    <button
      type="button"
      title={active ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
      onClick={() => toggleFavorite(meal)}
      className={[
        "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm transition border-red-500",
        active ? "bg-red-600 text-white border-red-600" : "hover:bg-black/5",
        className,
      ].join(" ")}>
      <span>{active ? "♥" : "♡"}</span>
      <span>Favorit</span>
    </button>
  )
}
