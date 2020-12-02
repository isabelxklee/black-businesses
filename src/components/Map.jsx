import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import PlaceMarker from './PlaceMarker.jsx'
import Panel from './Panel.jsx'
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

  render() {
    const places = this.props.app.places

    const placeMarkers = places.map((place, index) => {
      return <PlaceMarker place={place} app={this.props.app} key={index}></PlaceMarker>
    })

    return (
      <section>
        <Panel places={this.props.app.places} />
        {places.length > 0 ? placeMarkers : null}
        <section ref={(el) => (this.mapContainer = el)} className="map-container"></section>
      </section>
    )
  }
}

export default Map
