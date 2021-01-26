import React from 'react'
import PropTypes from 'prop-types'
import {IBusiness} from '../types'
import ListItem from './styled-components/ListItem.jsx'

const PanelChild = ({place, flyToLocation}) => {
  const handleClick = () => {
    flyToLocation(place.coordinates[0], place.coordinates[1], 14)
  }

  return (
    <ListItem onClick={handleClick}>
      <p className="popup title">{place.title}</p>
      <p className="popup">
        {place.city}, {place.state}
      </p>
    </ListItem>
  )
}

PanelChild.propTypes = {
  place: IBusiness.isRequired,
  flyToLocation: PropTypes.func,
}

export default PanelChild
