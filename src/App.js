import React, { Component } from 'react'
import './App.css'

import { CardList } from './components/card-list/card-list.component'

export class App extends Component {
  constructor() {
    super() 
      this.state = {
        monsters: [],
        searchField: ''
    }
  }


  handleSearch=(e)=>{(
    this.setState({searchField: e.target.value})
    )}

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={this.handleSearch}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App

