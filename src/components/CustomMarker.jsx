import React from 'react'
import {Marker} from 'react-map-gl'
import PropTypes from 'prop-types'
import mapPin from '../assets/map-pin.svg'

const CustomMarker = ({place, setSelectedMarker}) => {
  return (
    <Marker
      latitude={place.coordinates[1]}
      longitude={place.coordinates[0]}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <div className="marker" onClick={() => setSelectedMarker(place)}>
        <img src={mapPin} />
      </div>
    </Marker>
  )
}

export default CustomMarker

CustomMarker.propTypes = {
  place: PropTypes.object,
  setSelectedMarker: PropTypes.func,
}
