
export default function Skillcard(props) {
  return (
    <div className="skillcard">
      {props.icon}
      <h4>{props.name}</h4>
    </div>
  )
}
