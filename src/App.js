import React, {Component} from 'react';
import './App.css';
import PlanetList from './PlanetList'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      planets: [],
      searchField: ''        
  }
  }
  componentDidMount() {   
    fetch('https://swapi.py4e.com/api/planets/')
      .then(resp => resp.json())
      .then(data => {
        const planetslist = data.results
        console.log("this...", planetslist)
        this.setState({ 
          planets : planetslist,
          searchField : 'Wow'
        })
      })
      .then(console.log(this.state))
  }
  render () {
    return (
      <div>
        <PlanetList planets={this.state.planets}/>
      </div>
    )
  }
}

export default App;
