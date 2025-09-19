import { useMeals } from "../../functions/Functions"

export default function SearchResult() {
  const { query, meals, resultsVisible, hideResults } = useMeals()

  if (!resultsVisible) return null
  const list = meals.filter((m) => m.strMeal.toLowerCase().includes(query.trim().toLowerCase()))

  if (list.length === 0) {
    return (
      <section className="p-6">
        <div className="mb-4 text-lg text-blue">Keine Ergebnisse für „{query}“.</div>
        <button onClick={hideResults} className="px-5 py-1.5 rounded-lg bg-white border text-blue border-blue">
          Close
        </button>
      </section>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {list.map((m) => (
          <article key={m.idMeal} className="card">
            <img src={m.strMealThumb} alt={m.strMeal} className="w-full aspect-square object-cover rounded-t-lg" />
            <div className="p-3">{m.strMeal}</div>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <button onClick={hideResults} className="px-5 py-1.5 rounded-lg bg-white border text-blue border-blue">
          Close
        </button>
      </div>
    </>
  )
}
