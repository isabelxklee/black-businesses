import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Map from './components/Map.jsx'
import Header from './components/Header.jsx'
import Showcase from './components/Showcase.jsx'

class App extends Component {
  state = {
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

  setMap = (inputFromChild) => {
    this.setState({
      map: inputFromChild,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <section>
          <Switch>
            <Route exact path="/">
              <Map app={this.state} setMap={this.setMap} />
            </Route>
            <Route exact path="/all-businesses">
              <Showcase businesses={this.state.places} />
            </Route>
          </Switch>
        </section>
      </BrowserRouter>
    )
  }
}

export default App
