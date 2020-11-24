import React, {Component} from 'react'
import './App.css'
import Map from './components/Map.jsx'

class App extends Component {
  state = {
    long: -73.8748099,
    lat: 40.7774697,
    zoom: 10,
    style: 'mapbox://styles/mapbox/dark-v9',
    places: [],
    map: null,
  }

  componentDidMount() {
    fetch('https://black-businesses-json.herokuapp.com/places')
      .then((response) => response.json())
      .then((placesArray) => {
        this.setState({
          places: placesArray,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Map app={this.state} places={this.state.places} />
      </div>
    )
  }
}

export default App
