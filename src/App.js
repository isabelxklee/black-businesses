import React, {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {func} from 'prop-types'
import {IBusinesses} from './types'
import GlobalStyle from './components/styled-components/GlobalStyle.jsx'
import Map from './components/Map.jsx'
import HeroSection from './components/HeroSection.jsx'
import Header from './components/Header.jsx'
import Showcase from './components/Showcase.jsx'
import Resources from './components/Resources.jsx'
import BusinessPage from './components/BusinessPage.jsx'

class App extends Component {
  componentDidMount() {
    fetch('https://black-businesses-json.herokuapp.com/places')
      .then((response) => response.json())
      .then((placesArray) => {
        this.props.setAllPlaces(placesArray)
      })
  }

  render() {
    return (
      <section className="app">
        <GlobalStyle />
        <Header />
        <HeroSection />
        <div>
          <Switch>
            <Route exact path="/">
              <Map />
            </Route>
            <Route exact path="/businesses">
              <Showcase />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            {this.props.places.map((business) => (
              <Route exact path={`/businesses/${business.id}`} key={business.id}>
                <BusinessPage business={business} />
              </Route>
            ))}
          </Switch>
        </div>
      </section>
    )
  }
}

const setAllPlaces = (response) => {
  return {
    type: 'SET_ALL_PLACES',
    payload: response,
  }
}

const mapDispatchToProps = {
  setAllPlaces: setAllPlaces,
}

const mapStateToProps = (globalState) => {
  return {
    places: globalState.placesInfo.places,
  }
}

App.propTypes = {
  setAllPlaces: func.isRequired,
  places: IBusinesses.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
