import React from 'react'

export default function Pagination(props) {
  return (
   <div className="pagination">
    <p>HOME &#x276F; {props.page.toUpperCase()} </p>
   </div>
  )
}
