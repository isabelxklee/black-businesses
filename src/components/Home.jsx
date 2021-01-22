import React from 'react'
import {IMapState, IBusinesses} from '../types.js'
import Map from './Map.jsx'
import HeroSection from './HeroSection.jsx'

const Home = (props) => (
  <div className="home">
    <HeroSection />
    <Map places={props.places} app={props.app} />
  </div>
)

export default Home

Home.propTypes = {
  places: IBusinesses.isRequired,
  app: IMapState.isRequired,
}
