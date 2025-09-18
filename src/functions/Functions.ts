import { useContext } from "react"
import type { IState, TAction } from "../interfaces/Interfaces"
import { mainContext } from "../context/MainProvider"

export const useMeals = () => {
  const context = useContext(mainContext)
  if (!context) throw new Error("useContext funktioniert nicht")
  return context
}

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload }
    case "FETCH_CATEGORIES":
      return { ...state, loading: false, category: action.payload }
    case "FETCH_MEALS":
      return { ...state, loading: false, meals: action.payload }
    case "FETCH_QUERY":
      return { ...state, query: action.payload }
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload }
    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.some((f) => f.idMeal === action.payload.idMeal)
      const next = exists
        ? state.favorites.filter((f) => f.idMeal !== action.payload.idMeal)
        : [...state.favorites, action.payload]
      return { ...state, favorites: next }
    }
    default:
      return state
  }
}

export const initialState: IState = {
  meals: [],
  category: [],
  loading: false,
  error: null,
  query: "",
  favorites: [],
}
