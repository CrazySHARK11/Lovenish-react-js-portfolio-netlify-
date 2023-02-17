

export default function Servcard(props) {
  return (
    <div className="servcard">
       {props.icon}
       <span className="count"> {props.count} </span>
    <h4> {props.name} </h4>
    <p> {props.description} </p>
    </div>
  )
}
