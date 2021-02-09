import React from 'react'
import PropTypes from 'prop-types'
import Map from '../../components/Map'
import Hero from '../../components/Hero'

const Home = ({places}) => (
  <>
    <Hero />
    <Map places={places} />
  </>
)

Home.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home
