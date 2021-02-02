import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {IBusinesses} from './types'
import GlobalStyle from './components/styled-components/GlobalStyle.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Showcase from './components/Showcase.jsx'
import Resources from './components/Resources.jsx'
import BusinessRouteSwitcher from './components/BusinessRouteSwitcher.jsx'

class App extends Component {
  state = {
    long: -101.20869,
    lat: 39.8383872,
    zoom: 3.5,
    style: 'mapbox://styles/mapbox/light-v9',
    places: [],
  }

  async componentDidMount() {
    const response = await fetch('https://superhi-black-businesses.herokuapp.com/places')
    const placesArray = await response.json()
    this.setState({places: placesArray})
  }

  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home places={this.state.places} />
          </Route>
          <Route exact path="/businesses">
            <Showcase places={this.state.places} />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path={'/businesses/:id'}>
            <BusinessRouteSwitcher businesses={this.state.places} />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App

App.propTypes = {
  places: IBusinesses,
}
