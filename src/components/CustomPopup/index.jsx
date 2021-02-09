import React from 'react'
import PropTypes from 'prop-types'
import {StyledPopup, PopupH3} from './styles'
import {P} from '../../styles'

const CustomPopup = ({place, closePopup}) => (
  <StyledPopup
    latitude={place.coordinates[1]}
    longitude={place.coordinates[0]}
    onClose={closePopup}
    closeButton={false}
    offsetTop={10}
    sortByDepth={true}
  >
    <PopupH3>{place.title}</PopupH3>
    <P>{place.address}</P>
    <P>
      {place.city}, {place.state}
    </P>
  </StyledPopup>
)

export default CustomPopup

CustomPopup.propTypes = {
  place: PropTypes.object.isRequired,
  closePopup: PropTypes.func.isRequired,
}
