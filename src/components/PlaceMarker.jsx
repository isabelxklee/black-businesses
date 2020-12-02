import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'

class PlaceMarker extends Component {
  createMarker = () => {
    const app = this.props.app
    const place = this.props.place

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

  render() {
    return (
      <>
        {this.createMarker()}
      </>
    )
  }
}

export default PlaceMarker
