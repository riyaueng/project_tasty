import React from "react"
import { useMeals } from "../../functions/Functions"
import type { Category } from "../../interfaces/Interfaces"
import MealLink from "../../components/mealLink/MealLink"

export default function Home({ name }: HomeProps) {
  const { states } = useMeals()

  return (
    <div>
      <h1>Test</h1>
      {states.category.map((c: Category) => {
        return (
          <>
            <MealLink
              link={`/${c.strCategory}`}
              linkName={c.strCategory}
              img={c.strCategoryThumb}
              text={c.strCategory}
            />
          </>
        )
      })}
    </div>
  )
}
