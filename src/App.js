import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import Home from './pages/Home'
import Showcase from './pages/Showcase'
import Resources from './pages/Resources'
import Header from './components/Header'
import Footer from './components/Footer'
import BusinessRouteSwitcher from './components/BusinessRouteSwitcher'
import {GlobalStyle, theme} from './styles'

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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}

export default App
