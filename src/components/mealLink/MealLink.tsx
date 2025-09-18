import { Link } from "react-router"

interface MealLinkProps {
  link: string
  linkName: string
  img?: string
  className?: string
}

export default function MealLink(props: MealLinkProps) {
  return (
    <>
      <Link to={props.link} className={props.className}>
        {props.linkName}
        <img src={props.img} alt="" />
      </Link>
    </>
  )
}
