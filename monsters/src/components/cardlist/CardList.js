import React from 'react'

import './CardList.css'
import Card from '../card/Card'

const CardList = (props) => {
  console.log(props)
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  )
}

export default CardList

// monsters coming in on props from App.js
// each card displays one monster
