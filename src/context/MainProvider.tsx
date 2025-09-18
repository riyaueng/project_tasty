import React, { createContext, useEffect, useReducer } from "react"
import { initialState, reducer } from "../functions/Functions"
import type { IState, TAction } from "../interfaces/Interfaces"
import axios from "axios"
import { api, getCategories, getMealDetail, getMealsByCategory } from "../api/Api"

export interface MainProviderProps {
  states: IState
  dispatch: React.Dispatch<TAction>
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, initialState)

  async function fetchCategories() {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getCategories()
      dispatch({ type: "FETCH_CATEGORIES", payload: data.categories ?? [] })
    } catch (err: any) {
      dispatch({ type: "FETCH_ERROR", payload: err?.message ?? "Fehler beim Laden der Kategorien" })
    }
  }

  async function fetchMealsByCategories(category: string) {
    dispatch({ type: "FETCH_START" })
    try {
      const data = await getMealsByCategory(category)
      dispatch({ type: "FETCH_MEALS", payload: data.meals ?? [] })
    } catch (err: any) {
      dispatch({ type: "FETCH_ERROR", payload: err?.message ?? "Fehler beim Laden der Meals" })
    }
  }

  async function fetchMealDetail(id: string) {
    try {
      const data = await getMealDetail(id)
      return data ?? null
    } catch {
      return null
    }
  }

  function setQuery(query: string) {
    try {
    } catch {
      return null
    }
  }

  return <mainContext.Provider value={{ states, dispatch }}>{children}</mainContext.Provider>
}
