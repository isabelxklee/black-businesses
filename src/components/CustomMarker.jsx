import React from 'react'
import PropTypes from 'prop-types'
import {Marker} from 'react-map-gl'
import mapPin from '../assets/map-pin.png'
import StyledMarker from './styled-components/StyledMarker.jsx'

const CustomMarker = ({place, setSelectedMarker}) => {
  const handleClick = () => {
    setSelectedMarker(place)
  }

  return (
    <Marker
      latitude={place.coordinates[1]}
      longitude={place.coordinates[0]}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <StyledMarker src={mapPin} onClick={handleClick} />
    </Marker>
  )
}

export default CustomMarker

CustomMarker.propTypes = {
  place: PropTypes.object,
  setSelectedMarker: PropTypes.func,
}
