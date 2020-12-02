import React from 'react'
import mapboxgl from 'mapbox-gl'

const PlaceMarker = ({app, place}) => {
  const createMarker = () => {
    if (place && app) {
      const popup = new mapboxgl.Popup({
        closeButton: false,
      })

      popup.setHTML(
        `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
        <p class="popup">${place.address}</p>
        <p class="popup">${place.city}, ${place.state}</p>`
      )

      const marker = new mapboxgl.Marker({
        color: '#2727e6',
      })
      marker.setLngLat([place.coordinates[0], place.coordinates[1]])
      marker.setPopup(popup)
      marker.addTo(app.map)
    }
  }

  return (
    <section>
      {createMarker()}
    </section>
  ) 
}

export default PlaceMarker
