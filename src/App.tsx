import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Categories from "./pages/category/Categories"
import MealDetailPage from "./pages/MealDetailPage/MealDetailPage"
import FavoritesPage from "./pages/favoritePage/FavoritePage"
import PageWrapper from "./components/pageWrapper/PageWrapper"

// routing

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="category/:name"
          element={
            <PageWrapper>
              <Categories />
            </PageWrapper>
          }
        />
        <Route
          path="meal/:id"
          element={
            <PageWrapper>
              <MealDetailPage />
            </PageWrapper>
          }
        />
        <Route
          path="/favorites"
          element={
            <PageWrapper>
              <FavoritesPage />
            </PageWrapper>
          }
        />
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
