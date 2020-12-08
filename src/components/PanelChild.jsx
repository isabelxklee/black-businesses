import React from 'react'
import styled from 'styled-components'

const ListItem = styled.article`
  padding: 1.4rem 3rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #dadada;
  }
`

const PanelChild = ({place, map}) => {
  const flyToLocation = () => {
    map.flyTo({
      center: [place.coordinates[0], place.coordinates[1]],
      zoom: 12,
      curve: 1,
      speed: 1
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
