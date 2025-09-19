import { Link } from "react-router"
import { useMeals } from "../../functions/Functions"
import MealLink from "../../components/mealLink/MealLink"

// TODO styling anpassen

export default function FavoritesPage() {
  const { favorites } = useMeals()

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <Link to="/" className="underline text-sm">
          ← Zurück
        </Link>
        <h1 className="text-2xl font-bold">Meine Favoriten</h1>
        <span className="text-sm opacity-70">({favorites.length})</span>
      </header>

      {favorites.length === 0 ? (
        <p>Noch keine Favoriten.</p>
      ) : (
        <div className="grid gap-4 grid-cols-4">
          {favorites.map((m) => (
            <MealLink
              key={m.idMeal}
              link={`/meal/${m.idMeal}`}
              linkName={m.strMeal}
              img={m.strMealThumb}
              meal={m}
              imgClassName="w-full aspect-square object-cover"
            />
          ))}
        </div>
      )}
    </div>
  )
}
