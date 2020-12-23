import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import PlaceMarker from './PlaceMarker.jsx'
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

  render() {
    const {places, map} = this.props.app

    const placeMarkers = places.map((place, index) => {
      return <PlaceMarker place={place} app={this.props.app} key={index}></PlaceMarker>
    })

    return (
      <section>
        <Panel places={places} map={map} />
        {places.length > 0 ? placeMarkers : null}
        <section id="map" className="map-container" />
      </section>
    )
  }
}

export default Map
