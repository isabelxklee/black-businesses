import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  padding-bottom: 0.4rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid black;
  margin-left: 0;
  cursor: pointer;
`

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
