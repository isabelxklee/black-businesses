import React from 'react'
import {IBusinesses} from '../types.js'
import Map from './Map.jsx'
import HeroSection from './HeroSection.jsx'

const Home = ({places}) => (
  <div className="home">
    <HeroSection />
    <Map places={places} />
  </div>
)

export default Home

Home.propTypes = {
  places: IBusinesses.isRequired,
}
