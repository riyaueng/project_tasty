import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="px-10 md:px-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
