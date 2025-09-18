import axios from "axios"
import type { Category } from "../interfaces/Interfaces"

const apiLink = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" })

export const api = {
  async listCategories(): Promise<Category[]> {
    const { data } = await apiLink.get("/categories.php")
    return data.categories ?? []
  },
  async getMeal(id: string) {
    const { data } = await apiLink.get(`/lookup.php?i=${id}`)
    return data.meals?.[0] ?? null
  },
}
