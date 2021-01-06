import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import PlacesList from './PlacesList.jsx'
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  componentDidMount() {
    const {style, long, lat, zoom} = this.props.app

    const map = new mapboxgl.Map({
      container: 'map',
      style: style,
      center: [long, lat],
      zoom: zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    this.props.setMap(map)
  }

  createMarkers = () => {
    const {places, map} = this.props.app

    places.map((place) => {
      const marker = new mapboxgl.Marker({
        color: '#ea4a4a',
      })
      marker.setLngLat(place.coordinates)
      marker.addTo(map)

      const popup = new mapboxgl.Popup({offset: 0}).setHTML(
        `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
              <p class="popup">${place.address}</p>
              <p class="popup">${place.city}, ${place.state}</p>`
      )

      marker.setPopup(popup)
    })
  }

  render() {
    const {places, map} = this.props.app
    this.createMarkers()

    return (
      <section>
        <PlacesList places={places} map={map} />
        <section id="map" className="map-container" />
      </section>
    )
  }
}

export default Map
