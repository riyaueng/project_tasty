import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={"Layout"}>
        <Route index element={"Home"} />
        <Route path="category/:name" element={"Category"} />
        <Route path="meal/:id" element={"MealDetail"} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
