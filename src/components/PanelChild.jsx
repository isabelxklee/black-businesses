import React from 'react'
import ListItem from './styled-components/ListItem.jsx'

const PanelChild = ({place, map}) => {
  const flyToLocation = () => {
    map.jumpTo({
      center: [place.coordinates[0], place.coordinates[1]],
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

export default PanelChild
