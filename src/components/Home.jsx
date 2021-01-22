import React from 'react'
import {IBusinesses} from '../types.js'
import Map from './Map.jsx'
import HeroSection from './HeroSection.jsx'

const Home = (props) => (
  <div className="home">
    <HeroSection />
    <Map places={props.places} />
  </div>
)

export default Home

Home.propTypes = {
  places: IBusinesses.isRequired,
}
