import React from 'react'
import mapboxgl from 'mapbox-gl'

const PlaceMarker = ({app, place}) => {
  const createMarker = () => {
    if (place && app) {
      const popup = new mapboxgl.Popup({
        closeButton: false,
      })

      popup.setHTML(place.title)

      const marker = new mapboxgl.Marker({
        color: '#2727e6',
      })
      marker.setLngLat([place.coordinates[0], place.coordinates[1]])
      marker.setPopup(popup)
      marker.addTo(app.map)
    }
  }

  return <>{createMarker()}</>
}

export default PlaceMarker
