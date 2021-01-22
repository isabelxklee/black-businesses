import React, {Component} from 'react'
import {IMapState, IBusinesses} from '../types.js'
import mapboxgl from 'mapbox-gl'
import PlacesList from './PlacesList.jsx'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  state = {
    map: null,
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: this.props.app.appstyle,
      center: [this.props.app.long, this.props.app.lat],
      zoom: this.props.app.zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    this.setState({
      map: map,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.places !== this.props.places) {
      this.props.places.map((place) => {
        const marker = new mapboxgl.Marker({
          color: '#ea4a4a',
        })
        marker.setLngLat(place.coordinates)
        marker.addTo(this.state.map)

        const popup = new mapboxgl.Popup({offset: 0}).setHTML(
          `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
                <p class="popup">${place.address}</p>
                <p class="popup">${place.city}, ${place.state}</p>`
        )

        marker.setPopup(popup)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="map-header">
          <h2>Map View</h2>
        </div>
        <PlacesList places={this.props.places} map={this.state.map} />
        <div id="map" className="map-container" />
      </div>
    )
  }
}

Map.propTypes = {
  places: IBusinesses.isRequired,
  style: IMapState.isRequired,
  long: IMapState.isRequired,
  lat: IMapState.isRequired,
  zoom: IMapState.isRequired,
  app: IMapState.isRequired,
}

export default Map
