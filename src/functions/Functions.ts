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
      return { ...state, loading: false, query: action.payload }
  }
}

export const initialState: IState = {
  meals: [],
  category: [],
  loading: false,
  error: null,
  query: "",
}
