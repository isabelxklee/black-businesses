import React from 'react'
import PropTypes from 'prop-types'
import {Marker} from 'react-map-gl'
import mapPinIcon from '../assets/map-pin.png'
import MapPin from './styled-components/MapPin.jsx'

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
      <MapPin $isOnMap={true} src={mapPinIcon} onClick={handleClick} alt="a red map pin icon" />
    </Marker>
  )
}

export default CustomMarker

CustomMarker.propTypes = {
  place: PropTypes.object,
  setSelectedMarker: PropTypes.func,
}
