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
    map.flyTo({
      center: [place.coordinates[0], place.coordinates[1]],
      zoom: 14,
      speed: 1,
    })
  }

  return (
    <ListItem onClick={flyToLocation}>
      <p>{place.title}</p>
    </ListItem>
  )
}

export default PanelChild