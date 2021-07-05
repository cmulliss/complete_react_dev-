import React, { Component } from 'react'

import CardList from './cardList/CardList'

// initial state is an empty array
class App extends Component {
	state = {
		monsters: []
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const json = await response.json()
		this.setState({ monsters: json })
	}

	render() {
		return (
			<div>
				<CardList>
					{this.state.monsters.map((monster, index) => (
						<h1 key={index}>{monster.name}</h1>
					))}
				</CardList>
			</div>
		)
	}
}

export default App

// we are going to wait for our component to mount, then fetch all our users, than update our state 'monsters' with the new [] of users.
// taking the response and converting it into the json format that js can understand and use.
