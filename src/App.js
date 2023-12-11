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
    fetch(`https://swapi.py4e.com/api/planets/`)
      .then(resp => resp.json())
      .then(data => {
        const planetslist = data.results
        this.setState({ 
          planets : planetslist,
          searchField : ''
        })
      })
  }
  render () {
    return (
      <div>
        <PlanetList planets={this.state.planets} />
      </div>
    )
  }
}

export default App;
