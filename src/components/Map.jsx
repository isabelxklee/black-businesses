import React, {Component} from 'react'
import mapboxgl, {Marker} from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  componentDidMount() {
    const {style, long, lat, zoom} = this.props.app

    const places = [
      {
        title: "other business",
        long: -73.928641,
        lat: 40.681526
      },
      {
        title: "business",
        long: -73.954216,
        lat: 40.684093
      }
    ]  

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: style,
      center: [long, lat],
      zoom: zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    places.forEach((place) => {
      new mapboxgl.Marker()
      .setLngLat([place.long, place.lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<h1>${place.title}</h1>`))
      .addTo(map)
    })
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