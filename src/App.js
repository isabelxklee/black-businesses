import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GlobalStyle from './components/styled-components/GlobalStyle.jsx'
import Map from './components/Map.jsx'
import Header from './components/Header.jsx'
import Showcase from './components/Showcase.jsx'
import Resources from './components/Resources.jsx'
import BusinessPage from './components/BusinessPage.jsx'

const App = () => {
  const [mapState, setMapState] = useState({
    long: -101.20869,
    lat: 39.8383872,
    zoom: 3.5,
    map: null,
    style: 'mapbox://styles/mapbox/light-v9',
  })
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://black-businesses-json.herokuapp.com/places')
      const places = await response.json()
      setPlaces(places)
    }

    fetchData()
  }, [])

  const updateMap = (newMap) => {
    setMapState((mapState) => ({...mapState, map: newMap}))
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <section>
        <Switch>
          <Route exact path="/">
            <Map mapState={mapState} places={places} setMap={updateMap} />
          </Route>
          <Route exact path="/businesses">
            <Showcase businesses={places} />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          {places.map((business) => (
            <Route exact path={`/businesses/${business.id}`} key={business.id}>
              <BusinessPage business={business} />
            </Route>
          ))}
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default App
