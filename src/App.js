import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle.jsx'
import Map from './Map.jsx'
import Header from './components/Header.jsx'
import Showcase from './Showcase.jsx'
import Resources from './Resources.jsx'
import BusinessPage from './BusinessPage.jsx'
import PrimaryTag from './components/PrimaryTag.jsx'

class App extends Component {
  state = {
    long: -101.20869,
    lat: 39.8383872,
    zoom: 3.5,
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

  setMap = (inputFromChild) => {
    this.setState({
      map: inputFromChild,
    })
  }

  renderTags = (business) =>
    business.categories.map((category) => (
      <PrimaryTag key={category} id={category}>
        {category}
      </PrimaryTag>
    ))

  createNestedRoutes = () =>
    this.state.places.map((business) => (
      <Route exact path={`/businesses/${business.id}`} key={business.id}>
        <BusinessPage business={business} tags={this.renderTags(business)} />
      </Route>
    ))

  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <section>
          <Switch>
            <Route exact path="/">
              <Map app={this.state} setMap={this.setMap} />
            </Route>
            <Route exact path="/businesses">
              <Showcase businesses={this.state.places} />
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
