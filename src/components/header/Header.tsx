import React, { useState } from "react"
import { NavLink } from "react-router"

// TODO Input richtig einbinden sodas es richtig funktioniert

export default function Header() {
  const [search, setSearch] = useState("")
  return (
    <header className="flex items-center justify-center flex-col">
      <img src="/img/logo_tasty.svg" alt="" className="m-14" />
      <h2 className="text-4xl mb-6">Find a recipe, an idea, an inspiration…</h2>

      <div>
        <input
          type="text"
          placeholder="Type something to search"
          value={search}
          className="mb-6 mr-3 p-3 bg-input text-grey border-1 border-grey rounded-lg w-90 "
        />
        <button type="button" className="font-headline mb-6 p-3 bg-blue text-white rounded-lg w-36">
          Search
        </button>
        <div className="flex text-center items-center justify-center gap-20">
          <NavLink className={"font-headline mb-6 p-3 bg-blue text-white rounded-lg w-36"} to="/" end>
            Home
          </NavLink>
          <NavLink className={"font-headline mb-6 p-3 bg-blue text-white rounded-lg w-36"} to="/favorites">
            Favoriten
          </NavLink>
        </div>
      </div>
    </header>
  )
}
