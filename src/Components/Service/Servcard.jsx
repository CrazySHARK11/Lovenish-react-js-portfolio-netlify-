

export default function Servcard(props) {
  return (
    <div className="servcard">
      <span className="icon">  {props.icon} </span>
       <span className="count"> {props.count} </span>
    <h4> {props.name} </h4>
    <p> {props.description} </p>
    </div>
  )
}
