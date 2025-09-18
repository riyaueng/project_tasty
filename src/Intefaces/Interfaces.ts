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
