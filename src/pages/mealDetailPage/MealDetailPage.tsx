interface DetailProps {
  img: string
  altText: string
  text: string
  name: string
  description: string
  ingredients: string[]
  link: string
}

export default function details(props: DetailProps) {
  return (
    <div>
      <img src={props.img} alt={props.altText} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>

      <div>
        <h2>Ingredients</h2>
        <ul>{props.ingredients}</ul>
        <a href={props.link} target="_blank">
          Watch on Youtube
        </a>
      </div>
    </div>
  )
}
