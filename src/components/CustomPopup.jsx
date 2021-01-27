import React from 'react'
import StyledPopup from './styled-components/StyledPopup.jsx'
import H3 from './styled-components/H3.jsx'
import PropTypes from 'prop-types'

const CustomPopup = ({place, closePopup}) => {
  return (
    <StyledPopup
      latitude={place.coordinates[1]}
      longitude={place.coordinates[0]}
      onClose={closePopup}
      closeButton={false}
      offsetTop={10}
      sortByDepth={true}
    >
      <H3>{place.title}</H3>
      <p>{place.address}</p>
      <p>
        {place.city}, {place.state}
      </p>
    </StyledPopup>
  )
}

export default CustomPopup

CustomPopup.propTypes = {
  place: PropTypes.object,
  closePopup: PropTypes.func,
}
