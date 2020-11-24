import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import Map from './components/Map.jsx'
import About from './components/About.jsx'
import Businesses from './components/Businesses.jsx'

class App extends Component {
  state = {
    long: -73.8748099,
    lat: 40.7774697,
    zoom: 10,
    style: 'mapbox://styles/mapbox/light-v9',
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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Map</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/all-businesses">All businesses</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/all-businesses">
              <Businesses />
            </Route>
            <Route exact path="/home">
              <Map app={this.state} places={this.state.places} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
