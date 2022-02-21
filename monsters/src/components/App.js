import React, { Component } from 'react'

import CardList from './cardlist/CardList'
import SearchBar from './searchbar/SearchBar'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            this.setState({ searchField: e.target.value })
            console.log(this.state)
          }}
        />

        <CardList monsters={this.state.monsters}></CardList>
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
