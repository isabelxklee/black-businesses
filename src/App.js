import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {IMapState, IBusinesses} from './types'
import GlobalStyle from './components/styled-components/GlobalStyle.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Showcase from './components/Showcase.jsx'
import Resources from './components/Resources.jsx'
import BusinessPage from './components/BusinessPage.jsx'

class App extends Component {
  state = {
    long: -101.20869,
    lat: 39.8383872,
    zoom: 3.5,
    style: 'mapbox://styles/mapbox/light-v9',
    places: [],
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
      <section className="app">
        <GlobalStyle />
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home places={this.state.places} app={this.state} />
            </Route>
            <Route exact path="/businesses">
              <Showcase />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            {this.state.places.map((business) => (
              <Route exact path={`/businesses/${business.id}`} key={business.id}>
                <BusinessPage business={business} />
              </Route>
            ))}
          </Switch>
        </div>
        <Footer />
      </section>
    )
  }
}

export default App

App.propTypes = {
  places: IBusinesses.isRequired,
  app: IMapState.isRequired,
}
