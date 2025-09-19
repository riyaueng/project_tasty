import { Link } from "react-router"
import type { Meal } from "../../interfaces/Interfaces"
import FavoriteButton from "../favoritebutton/FavoriteButton"

interface MealLinkProps {
  link: string
  linkName: string
  img?: string
  description?: string
  className?: string
  linkClassName?: string
  textClassName?: string
  meal?: Meal
  index?: number
}

export default function MealLink({
  link,
  linkName,
  img,
  className = "",
  linkClassName = "",
  textClassName = "",
  meal,
  index = 0,
}: MealLinkProps) {
  const bgColor = index % 2 === 0 ? "bg-green" : "bg-blue"

  const getBgColor = (index: number) => {
    if (index === 1) return "bg-green"
    const block = Math.floor((index - 1) / 2)
    return block % 2 === 0 ? "bg-green" : "bg-blue"
  }

  const bgColorMeals = getBgColor(index)

  return (
    <Link to={link} className={["w-fit", linkClassName].join(" ")}>
      {!meal && (
        <div
          className={[
            "flex flex-col items-center rounded-lg  justify-center py-5 shadow-md hover:shadow-lg transition",
            bgColor,
            className,
          ].join(" ")}>
          <h3 className={["text-3xl font-semibold text-white", textClassName].join(" ")}>{linkName}</h3>
          {img && <img src={img} alt={linkName} className="w-[80%] h-[80%] object-contain mb-4" loading="lazy" />}
        </div>
      )}

      {meal && (
        <>
          <div
            className={[
              "relative py-10 shadow-md rounded-lg  hover:shadow-lg transition px-10 h-full w-full",
              bgColorMeals,
              className,
            ].join(" ")}>
            <h3 className="text-2xl font-semibold text-white leading-snug line-clamp-2 mb-5">{linkName}</h3>

            {img && (
              <div className="rounded-xl overflow-hidden shadow-sm items-center justify-start">
                <img src={img} alt={linkName} className="object-cover w-full h-full" loading="lazy" />
              </div>
            )}
            <FavoriteButton meal={meal} />
          </div>
        </>
      )}
    </Link>
  )
}
