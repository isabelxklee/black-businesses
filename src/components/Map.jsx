import React, {Component} from 'react'
import MapboxGL, {Marker} from 'mapbox-gl'
MapboxGL.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  componentDidMount() {
    const {style, long, lat, zoom} = this.props.app

    const map = new MapboxGL.Map({
      container: this.mapContainer,
      style: style,
      center: [long, lat],
      zoom: zoom,
    })

    const navigationControl = new MapboxGL.NavigationControl()
    map.addControl(navigationControl)
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer"></div>
      </div>
    )
  }
}

export default Map
