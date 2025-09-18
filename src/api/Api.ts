import axios from "axios"
import type { ICategories, IMeals, IMealsDetail } from "../interfaces/Interfaces"

export const api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" })

// Kategorien laden
export async function getCategories() {
  const { data } = await api.get<ICategories>("/categories.php")
  return data
}

// Meals nach Kategorie
export async function getMealsByCategory(category: string) {
  const { data } = await api.get<IMeals>("/filter.php", {
    params: { c: category },
  })
  return data
}

// Meals nach Name suchen
export async function searchMeals(name: string) {
  const { data } = await api.get<IMealsDetail>("/search.php", {
    params: { s: name },
  })
  return data
}

// Meal Detail per ID
export async function getMealDetail(id: string) {
  const { data } = await api.get<IMealsDetail>("/lookup.php", {
    params: { i: id },
  })
  return data
}
