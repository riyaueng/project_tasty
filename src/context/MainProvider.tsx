import React, { createContext, useMemo, useReducer } from "react"
import { initialState, reducer } from "../functions/Functions"
import type { IMealsDetail, IState, Meal } from "../interfaces/Interfaces"
import { getCategories, getMealDetail, getMealsByCategory, searchMeals } from "../api/Api"

export interface MainProviderProps extends IState {
  fetchCategories: () => Promise<void>
  fetchMealsByCategories: (category: string) => Promise<void>
  searchMealsByName: (name: string) => Promise<void>
  setQuery: (q: string) => void
  getMealDetail: (id: string) => Promise<IMealsDetail | null>
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, initialState)

  // ? Fetch Categories
  async function fetchCategories() {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getCategories()
      dispatch({ type: "FETCH_CATEGORIES", payload: data.categories ?? [] })
    } catch (err: any) {
      dispatch({ type: "FETCH_ERROR", payload: err?.message ?? "Fehler beim Laden der Kategorien" })
    }
  }

  // ? Fetch Meals in Categories
  async function fetchMealsByCategories(category: string) {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getMealsByCategory(category)
      dispatch({ type: "FETCH_MEALS", payload: data.meals ?? [] })
    } catch (err: any) {
      dispatch({ type: "FETCH_ERROR", payload: err?.message ?? "Fehler beim Laden der Meals" })
    }
  }

  //? Meal Detail
  async function fetchMealDetail(id: string) {
    try {
      const data = await getMealDetail(id)
      return data ?? null
    } catch {
      return null
    }
  }

  function setQuery(query: string) {
    dispatch({ type: "FETCH_QUERY", payload: query })
  }

  //? Fetch search
  async function searchMealsByName(name: string) {
    dispatch({ type: "FETCH_START" })
    dispatch({ type: "FETCH_QUERY", payload: name })
    try {
      const data = await searchMeals(name)
      const slim: Meal[] =
        data.meals?.map((m: any) => ({
          idMeal: m.idMeal,
          strMeal: m.strMeal,
          strMealThumb: m.strMealThumb,
        })) ?? []
      dispatch({ type: "FETCH_MEALS", payload: slim })
    } catch (err: any) {
      dispatch({ type: "FETCH_ERROR", payload: err?.message ?? "Fehler bei der Suche" })
    }
  }

  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      fetchCategories,
      fetchMealsByCategories,
      searchMealsByName,
      setQuery,
      getMealDetail: fetchMealDetail,
    }),
    [states]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
