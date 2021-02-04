import React from 'react'
import PropTypes from 'prop-types'
import {Marker} from 'react-map-gl'
import {MapPin} from './styles'

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
      <MapPin onClick={handleClick} alt="a red map pin icon" />
    </Marker>
  )
}

CustomMarker.propTypes = {
  place: PropTypes.object.isRequired,
  setSelectedMarker: PropTypes.func.isRequired,
}

export default CustomMarker
