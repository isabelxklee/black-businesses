import React from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'

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
      zoom: 12,
      speed: 1,
    })

    createPopup(place, map)
  }

  const createPopup = (place, map) => {
    const existingPopup = document.getElementsByClassName('mapboxgl-popup')
   
    if (existingPopup.length > 0) {
      map.on('closeAllPopups', () => {
        for (let i = 0; i < existingPopup.length; i++) {
          existingPopup[i].remove()
        }
      })

      map.fire('closeAllPopups')
    } else {
      const popup = new mapboxgl.Popup().setHTML(
        `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
        <p class="popup">${place.address}</p>
        <p class="popup">${place.city}, ${place.state}</p>`
      )
      popup.setLngLat([place.coordinates[0], place.coordinates[1]])
      popup.addTo(map)
    }
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
