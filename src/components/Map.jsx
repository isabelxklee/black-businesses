import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  componentDidMount() {
    const {style, long, lat, zoom} = this.props.app

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: style,
      center: [long, lat],
      zoom: zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    this.props.setMap(map)
  }

  renderAllMarkers = () => {
    const places = this.props.app.places
    const map = this.props.app.map

    places.forEach((place) => {
      if (place && place.coordinates !== null) {
        new mapboxgl.Marker()
        .setLngLat([place.coordinates[0], place.coordinates[1]])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${place.title}</h3><p>${place.address}</p><p>${place.city}</p>`))
        .addTo(map)
      }
    })
  }

  render() {
    return (
      <div>
        {this.renderAllMarkers()}
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer"></div>
      </div>
    )
  }
}

export default Map