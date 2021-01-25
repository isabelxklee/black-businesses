import React from 'react'
import {Popup} from 'react-map-gl'
import PropTypes from 'prop-types'

const CustomPopup = ({place, closePopup}) => {
  return (
    <Popup
      latitude={place.coordinates[1]}
      longitude={place.coordinates[0]}
      onClose={closePopup}
      closeButton={true}
      offsetTop={10}
    >
      <h3>{place.title}</h3>
      <p>{place.address}</p>
      <p>
        {place.city}, {place.state}
      </p>
      <a href={place.website} target="noreferrer_blank" className="site-link map">
        Visit their site
      </a>
    </Popup>
  )
}

export default CustomPopup

CustomPopup.propTypes = {
  place: PropTypes.object,
  closePopup: PropTypes.func,
}
