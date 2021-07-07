import React from 'react'

import './CardList.css'
import Card from '../card/Card'

const CardList = (props) => {
	console.log(props)

	return (
		<div>
			<div className='card-list'>
				{props.monsters.map((monster) => (
					<Card key={monster.id} monster={monster} />
				))}
			</div>
		</div>
	)
}

export default CardList

// props monsters from App, then code to generate the list, so instead of being off state, if off props
// CardList is generating the list
