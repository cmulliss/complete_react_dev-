import React from 'react'

import './CardList.css'

const CardList = (props) => {
	console.log(props)

	return (
		<div>
			<div className='card-list'>{props.children}</div>
		</div>
	)
}

export default CardList
