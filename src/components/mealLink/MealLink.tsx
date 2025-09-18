import { Link } from "react-router"

interface MealLinkProps {
  link: string
  linkName: string
  img: string
  text: string
}

export default function MealLink(props: MealLinkProps) {
  return (
    <>
      <Link to={props.link}>
        {props.linkName} img={props.img} text={props.text}
      </Link>
    </>
  )
}
