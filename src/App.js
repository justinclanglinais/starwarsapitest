import React, {Component} from 'react';
import './App.css';
import PlanetList from './PlanetList'
import SearchBox from './SearchBox';


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

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
    console.log(event.target.value)
  }

  render () {
    return (
      <div>
        <SearchBox searchChange={this.onSearchChange}/>
        <PlanetList planets={this.state.planets} />
      </div>
    )
  }
}

export default App;
