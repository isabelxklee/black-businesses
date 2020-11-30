import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Map from './components/Map.jsx'
import Header from './components/Header.jsx'
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
      <BrowserRouter>
        <Header />
        <section>
          <Switch>
            <Route exact path="/">
              <Map app={this.state} places={this.state.places} />
            </Route>
            <Route exact path="/all-businesses">
              <Businesses businesses={this.state.places} />
            </Route>
          </Switch>
        </section>
      </BrowserRouter>
    )
  }
}

export default App
