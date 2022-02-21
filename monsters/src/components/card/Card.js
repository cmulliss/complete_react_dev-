import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${props.monster.id}7?set=set2&size=180x180`} />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}

export default Card

// passing individual monster via props from App.js
