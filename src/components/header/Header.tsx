import { NavLink } from "react-router"
import { useMeals } from "../../functions/Functions"
import SearchResult from "../searchResult/SearchResult"
import { useEffect } from "react"

export default function Header() {
  const { search, setSearch, submitSearch } = useMeals()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void submitSearch()
  }

  return (
    <header className="flex items-center flex-col px-10 md:px-30">
      <img src="/img/logo_tasty.svg" alt="" className="m-14" />
      <h2 className="text-4xl mb-10">Find a recipe, an idea, an inspiration…</h2>

      <div className="flex justify-between w-full flex-col md:flex-row gap-4">
        <div className="flex text-center items-center justify-start w-full gap-2 ">
          <NavLink
            className={
              "font-headline  p-2 text-lg uppercase tracking-wide text-blue rounded-lg flex items-center gap-2 w-fit"
            }
            to="/"
            end>
            <img src="/img/icon_home_blue.png" alt="Home Button" className="w-10" />
            Home
          </NavLink>

          <NavLink
            className={
              "font-headline  p-2 text-lg uppercase tracking-wide text-blue rounded-lg flex items-center gap-2 "
            }
            to="/favorites">
            <img src="/img/icon_heart_blue.png" alt="Favorites Button" className="w-8" />
            Favoriten
          </NavLink>
        </div>

        <form onSubmit={handleSearch} className="w-full">
          <div className="flex items-center justify-start md:justify-end w-full">
            <input
              type="text"
              placeholder="Type something to search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="  p-3 bg-input text-grey border-t-1 border-b-1 border-l-1 border-grey  rounded-tl-lg rounded-bl-lg w-[80%] md:w-[50%]"
            />
            <button
              type="submit"
              className="font-headline p-3 bg-blue text-white rounded-tr-lg rounded-br-lg  border-1 border-blue">
              <img src="/img/icon_search.png" alt="Search Button" className="w-6" />
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}
