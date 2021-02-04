import React from 'react'
import PropTypes from 'prop-types'
import Map from '../../components/Map'
import HeroSection from '../../components/HeroSection'

const Home = ({places}) => (
  <>
    <HeroSection />
    <Map places={places} />
  </>
)

Home.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home
