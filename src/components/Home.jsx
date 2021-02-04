import React from 'react'
import PropTypes from 'prop-types'
import Map from './Map.jsx'
import HeroSection from './HeroSection.jsx'

const Home = ({places}) => (
  <div>
    <HeroSection />
    <Map places={places} />
  </div>
)

export default Home

Home.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
}
