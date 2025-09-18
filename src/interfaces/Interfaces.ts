// ? -------- API Interfaces -------------

export interface IMealsDetail {
  meals: { [key: string]: null | string }[]
}

export interface ICategories {
  categories: Category[]
}

export interface Category {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface IMeals {
  meals: Meal[]
}

export interface Meal {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

// ? -------- Provider Interfaces -------------

export interface IState {
  meals: Meal[]
  category: Category[]
  loading: boolean
  error: string | null
  query: string
}

export type TAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "FETCH_CATEGORIES"; payload: Category[] }
  | { type: "FETCH_MEALS"; payload: Meal[] }
  | { type: "FETCH_QUERY"; payload: string }
