import React, {Component} from 'react'
import './App.css'
import Map from './components/Map'

class App extends Component {
  state = {
    long: -73.8748099,
    lat: 40.7774697,
    zoom: 10,
    style: 'mapbox://styles/mapbox/dark-v9'
  }

  render() {
    return (
      <div className="App">
        <Map app={this.state}></Map>
      </div>
    )
  }
}

export default App