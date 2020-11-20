import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 2,
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    )
  }
}

export default Map
