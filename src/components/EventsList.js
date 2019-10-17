import React from 'react';
import { Link } from 'react-router-dom'

export default function EventsList(props){
  return(
    <div>
      {props.events ?
      <ul>
        {props.events.map(event => {
          return <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link></li>
        })}
      </ul>
      : 'Loading...'}
    </div>
  )
} 