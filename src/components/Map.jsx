import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import Panel from './Panel.jsx'
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-101.20869, 39.8383872],
      zoom: 3.5,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    this.props.setMap(map)
  }

  createMarkers = () => {
    const {places, map} = this.props.app
    {
      places.length > 0
        ? this.props.app.places.map((place) => {
            const marker = new mapboxgl.Marker({
              color: '#2727e6',
            })
            marker.setLngLat([place.coordinates[0], place.coordinates[1]])
            marker.addTo(map)

            const popup = new mapboxgl.Popup({offset: 0}).setHTML(
              `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
              <p class="popup">${place.address}</p>
              <p class="popup">${place.city}, ${place.state}</p>`
            )

            marker.setPopup(popup)
          })
        : null
    }
  }

  render() {
    const {places, map} = this.props.app

    return (
      <section>
        <Panel places={places} map={map} />
        <section>{this.createMarkers()}</section>
        <section id="map" className="map-container" />
      </section>
    )
  }
}

export default Map
