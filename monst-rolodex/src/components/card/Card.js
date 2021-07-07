import React from 'react'

import './Card.css'

const Card = (props) => {
	return (
		<div className='card-container'>
			<img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	)
}

export default Card

// we are passing monster into the Card component, and the Card component gets it from the props and displays the name.
