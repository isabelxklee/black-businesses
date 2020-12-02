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
          .setPopup(
            new mapboxgl.Popup({clasName: "mapbox-popup"}).setHTML(
              `<h3 class="popup"><a href=${place.website} class="popup" target="noreferrer_blank">${place.title}</a></h3><p class="popup">${place.address}</p><p class="popup">${place.city}, ${place.state}</p>`
            )
          )
          .addTo(map)
      }
    })
  }

  render() {
    return (
      <section>
        {this.renderAllMarkers()}
        <section ref={(el) => (this.mapContainer = el)} className="map-container"></section>
      </section>
    )
  }
}

export default Map
