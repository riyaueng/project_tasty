import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Categories from "./pages/category/Categories"
import MealDetailPage from "./pages/MealDetailPage/MealDetailPage"
import FavoritesPage from "./pages/favoritePage/FavoritePage"

// routing

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:name" element={<Categories />} />
        <Route path="meal/:id" element={<MealDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
