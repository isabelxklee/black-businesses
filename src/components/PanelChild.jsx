import React from 'react'
import {object} from 'prop-types'
import {IBusiness} from '../types'
import ListItem from './styled-components/ListItem.jsx'

const PanelChild = ({place, map}) => {
  const flyToLocation = () => {
    map.jumpTo({
      center: place.coordinates,
      zoom: 12,
    })
  }

  return (
    <ListItem onClick={flyToLocation}>
      <p className="popup title">{place.title}</p>
      <p className="popup">
        {place.city}, {place.state}
      </p>
    </ListItem>
  )
}

PanelChild.propTypes = {
  place: IBusiness.isRequired,
  map: object,
}

export default PanelChild
