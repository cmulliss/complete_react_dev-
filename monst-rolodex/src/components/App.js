import React, { Component } from 'react'

class App extends Component {
	state = {
		monsters: [
			{
				name: 'Frankenstein',
				id: '1'
			},
			{
				name: 'Dracula',
				id: '2'
			},
			{
				name: 'Zombie',
				id: '3'
			}
		]
	}
	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const json = await response.json()
		this.setState({ users: json })
	}

	render() {
		
		return (
			<div className='ui container'>
				<h1 className='ui header'>Monsters Rolodex</h1>
				{this.state.monsters.map((monster, index) => (
					<h1 key={index}>{monster.name}</h1>
				))}
			</div>
		)
	}
}

export default App
