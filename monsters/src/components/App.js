import React, { Component } from 'react'

import CardList from './cardlist/CardList'

class App extends Component {
  state = {
    monsters: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className='App'>
        <CardList name='Cherry' />
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default App

// There is my solution using async await :

//   async componentDidMount() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const json = await response.json();
//     this.setState({ users: json });
//   }
