import React, { createContext, useEffect, useReducer } from "react"
import { reducer } from "../functions/Functions"
import type { IState, TAction } from "../interfaces/Interfaces"
import axios from "axios"
import { api } from "../api/Api"

export interface MainProviderProps {
  states: IState
  dispatch: React.Dispatch<TAction>
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, { meals: [], category: [], loading: false, error: null, query: "" })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" })
      try {
        const resp = await api.listCategories()
        dispatch({ type: "FETCH_CATEGORIES", payload: resp })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed Fetching." })
      }
    }
    fetchData()
  }, [])

  return <mainContext.Provider value={{ states, dispatch }}>{children}</mainContext.Provider>
}
