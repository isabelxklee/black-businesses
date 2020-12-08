import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Map from './components/Map.jsx'
import Header from './components/Header.jsx'
import BusinessContainer from './components/BusinessContainer.jsx'
import Resources from './components/Resources.jsx'
import BusinessPage from './components/BusinessPage.jsx'
import SecondaryTag from './components/SecondaryTag.jsx'

class App extends Component {
  state = {
    long: -101.20869,
    lat: 39.8383872,
    zoom: 3.5,
    style: 'mapbox://styles/mapbox/light-v9',
    places: [],
    map: null
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

  getAllCategories = () => {
    const array = []
    array.push('all')

    this.state.places.forEach((place) => {
      place.categories.forEach((category) => {
        array.push(category)
      })
    })

    let uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index)
    return uniqueArray
  }

  setMap = (inputFromChild) => {
    this.setState({
      map: inputFromChild,
    })
  }

  renderBusinessTags = (categories) => {
    return categories.map((category) => {
      return (
        <SecondaryTag key={category} id={category}>
          {category}
        </SecondaryTag>
      )
    })
  }

  createNestedRoutes = () => {
    return this.state.places.map((business) => (
      <Route exact path={`/all-businesses/${business.id}`} key={business.id}>
        <BusinessPage
          business={business}
          businessTags={this.renderBusinessTags(business.categories)}
        />
      </Route>
    ))
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
              <BusinessContainer businesses={this.state.places} categories={this.getAllCategories()} />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            {this.createNestedRoutes()}
          </Switch>
        </section>
      </BrowserRouter>
    )
  }
}

export default App
